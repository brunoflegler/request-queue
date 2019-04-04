'use strict'

const Queue = require('../../services/Queue')
const { loadAllInvoices } = require('../../tasks/InvoiceTask')
const InvoiceJob = require('../../jobs/InvoiceJob')

class InvoiceController {
  async realtime (req, res) {
    let { ...data } = req.body

    // console.log('-------------------')
    // console.log(`Lote de nota fiscal adicionado na fila`)

    const response = await loadAllInvoices(data)

    // console.log(`Lote processado com ${response.length} notas  `)

    return res.send(response)
  }

  async background (req, res) {
    const { ...data } = req.body

    await Queue.create(InvoiceJob.key, data)
      .attempts(3)
      .backoff({ delay: 1 * 1000, type: 'fixed' })
      .priority(10)
      .removeOnComplete(true)
      .save()

    /*     console.log('-------------------')
    console.log(`Lote de nota fiscal adicionado na fila`)
 */
    return res.json({ status: true })
  }
}

module.exports = new InvoiceController()
