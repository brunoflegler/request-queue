const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai
chai.use(chaiHttp)

const server = require('../../src')

describe('POST /background', () => {
  it('It should be able process background', async () => {
    const file = {
      invoices: [
        {
          name: "Bruno Flegler Dal'Col",
          total: 150.0
        }
      ]
    }

    const response = await chai
      .request(server)
      .post('/background')
      .send(file)

    expect(response.body).to.be.property('status')
  })
})

describe('POST /realtime', () => {
  it('It should be able process realtime', async () => {
    const file = {
      invoices: [
        {
          name: "Bruno Flegler Dal'Col",
          total: 150.0
        }
      ]
    }

    const response = await chai
      .request(server)
      .post('/realtime')
      .send(file)

    expect(response.body[0]).to.be.property('id')
  })
})
