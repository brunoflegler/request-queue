'use strict'

const { loadAllInvoices } = require('../tasks/InvoiceTask')

class InvoiceJob {
  get key () {
    return '@gpi:invoice'
  }

  async handle ({ id, data }, done) {
    try {
      await loadAllInvoices(data)

      // console.log(`Lote ${id} processado com ${response.length} notas  `)

      done()
    } catch (err) {
      done(err)
    }
  }
}

module.exports = new InvoiceJob()
