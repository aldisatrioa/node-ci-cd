const app = require('../server')
const request = require('supertest')

describe('Task API', () => {
    it('it should fetch all', async (done) => {
        const result = await request(app).get("/api/task")
        expect(result.statusCode).toBe(1)

        done()
    })
})