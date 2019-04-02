const express = require('express')
const Router = express.Router()

const kue = require('kue')
const ui = require('kue-ui')

const redisConfig = require('./config/redis')
const controllers = require('./app/controllers')

kue.createQueue({ redis: redisConfig })

ui.setup({
  apiURL: '/api', // IMPORTANT: specify the api url
  baseURL: '/kue', // IMPORTANT: specify the base url
  updateInterval: 500 // Optional: Fetches new data every 5000 ms
})

Router.use('/api', kue.app)
Router.use('/kue', ui.app)
Router.post('/background', controllers.NoteController.background)

module.exports = Router
