'use strict'

const { Invoice } = require('../app/models')

async function loadAllInvoices (data) {
  return Promise.all(
    data.invoices.map(async invoice => {
      try {
        return await saveAllInvoices(invoice)
      } catch (err) {
        console.log(err)
      }
    })
  )
}

async function saveAllInvoices (data) {
  return new Promise(async (resolve, reject) => {
    try {
      const invoice = await Invoice.create(data)
      resolve(invoice.dataValues)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = { loadAllInvoices }
