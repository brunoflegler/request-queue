'use strict'

const Queue = require('../../services/Queue')
const { loadAll } = require('../../services/Load')

class NoteController {
  async realtime (req, res) {
    let { ...data } = req.body

    data = { ...data, id: Math.floor(Math.random() * 10000001) }

    console.log('-------------------')
    console.log(
      `Lote ${data.id} realtime de nota fiscal adicionado na fila high`
    )

    const response = await loadAll(data.id, data.files)

    console.log('-------------------')
    console.log(`Lote ${data.id} processado com ${data.files.length} notas  `)

    return res.send(response)
  }

  background (req, res) {
    let { ...data } = req.body

    data = { ...data, id: Math.floor(Math.random() * 10000001) }

    const priority = data.files.length > 10 ? 'low' : 'high'

    Queue.create(`@nfs:task`, data)
      .attempts(3) // numeros de tentativas
      .backoff({ delay: 1 * 1000, type: 'fixed' }) // atrasar o envio das falhas
      .priority(-10) // prioridade high
      .removeOnComplete(true) // remove do redis quando completado
      .save()

    console.log('-------------------')
    console.log(`Lote ${data.id} de nota fiscal adicionado na fila ${priority}`)

    return res.json({ status: true })
  }
}

module.exports = new NoteController()
