'use strict'

module.exports = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  db: process.env.REDIS_DB,
  options: {
    no_ready_check: false
  }
}
