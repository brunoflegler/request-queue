const kue = require('kue')

const redisConfig = require('../config/redis')
const jobs = require('../jobs')
const Queue = kue.createQueue({ redis: redisConfig })

Queue.process(`@nfs:task`, 10, jobs.JobNote.handle)

Queue.on('error', err => {
  console.log(err)
})

module.exports = Queue
