const app = require('./app');
const supertest  = require('supertest');
const request = supertest(app);


describe('test-api-endpoint', () => {
    

    it('test-get-/', async () => {

        const  response = await request.get('/');
        expect(response.status).toBe(400)

    })

});
