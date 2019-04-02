const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai
chai.use(chaiHttp)

const server = require('../../src')

describe('POST /background', () => {
  it('It should be able process background', async () => {
    const file = {
      files: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
    }

    const response = await chai
      .request(server)
      .post('/background')
      .send(file)

    expect(response.body).to.be.property('status')
  })
})
