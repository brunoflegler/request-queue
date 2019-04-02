const Youch = require('youch')
const cors = require('cors')
const express = require('express')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
    this.exception()
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }

  exception () {
    this.express.use(async (err, req, res, next) => {
      if (process.env.NODE.ENV !== 'production') {
        const youch = new Youch(err)
        return res.json(await youch.toJSON())
      }

      return res
        .status(err.status || 500)
        .json({ error: 'Internal server error' })
    })
  }
}

module.exports = new App()
