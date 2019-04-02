require('dotenv').config()

const { express: server } = require('./server')

server.listen(process.env.PORT | 3000, () => {
  console.log('server is running...')
})

module.exports = server
