'use strict'

const Queue = require('../../services/Queue')

class NoteController {
  background (req, res) {
    let { ...data } = req.body

    data = { ...data, id: Math.floor(Math.random() * 10000001) }

    const priority = data.files.length > 10 ? 'low' : 'high'

    Queue.create(`@nfs:task`, data)
      .attempts(3) // numeros de tentativas
      .backoff({ delay: 1 * 1000, type: 'fixed' }) // atrasar o envio das falhas
      .priority(priority) // prioridade high
      .removeOnComplete(true) // remove do redis quando completado
      .save()

    console.log('-------------------')
    console.log(`Lote ${data.id} de nota fiscal adicionado na fila ${priority}`)

    return res.json({ status: true })
  }
}

module.exports = new NoteController()
