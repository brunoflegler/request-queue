const express = require('express')
const Router = express.Router()

const kue = require('kue')
const ui = require('kue-ui')

const redisConfig = require('./config/redis')
const controllers = require('./app/controllers')

kue.createQueue({ redis: redisConfig })

ui.setup({
  apiURL: '/api',
  baseURL: '/kue',
  updateInterval: 500
})

Router.use('/api', kue.app)
Router.use('/kue', ui.app)
Router.post('/background', controllers.InvoiceController.background)
Router.post('/realtime', controllers.InvoiceController.realtime)

module.exports = Router
