const kue = require('kue')

const redisConfig = require('../config/redis')
const jobs = require('../jobs')
const Queue = kue.createQueue({ redis: redisConfig })

// Queue.process(jobs.InvoiceJob.key, 10, jobs.InvoiceJob.handle)
Queue.process('@tcp:key', 10, (job, done) => {
  done()
})

Queue.on('error', err => {
  console.log(err)
})

module.exports = Queue
