'use strict'

const { loadAll } = require('../services/Load')

class JobNote {
  get key () {
    return 'TaskNote'
  }

  async handle (job, done) {
    const { id, files } = job.data

    await loadAll(id, files)

    console.log('-------------------')
    console.log(`Lote ${id} processado com ${files.length} notas  `)

    done()
  }
}

module.exports = new JobNote()
