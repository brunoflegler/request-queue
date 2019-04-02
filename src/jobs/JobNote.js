'use strict'

const { loadAll } = require('../services/Load')

class JobNote {
  get key () {
    return 'TaskNote'
  }

  async handle ({ data }, done) {
    try {
      await loadAll(data.id, data.files)

      console.log('-------------------')
      console.log(`Lote ${data.id} processado com ${data.files.length} notas  `)

      done()
    } catch (err) {
      done(err)
    }
  }
}

module.exports = new JobNote()
