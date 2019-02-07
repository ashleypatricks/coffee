const expect = require('expect');
const request = require('supertest');

const { Coffee } = require('../models/coffee');
const { app } = require('../app');

describe('GET /coffee', () => {

    it('Should return all coffee varieties', (done) => {
        request(app)
        .get('/coffee/searchAll')
        .expect(200)
        .expect((res) => {
            expect(res.body.Coffee_List).toBeTruthy();
            expect(res.body.Coffee_List.length).toBeGreaterThan(0);
        })
        .end(done);
    });
});

describe('POST /coffee', () => {

    it('Should return filtered coffee varieties', (done) => {
        request(app)
        .post('/coffee/filtered')
        .send({
            producing_countries:"Costa Rica",
            yield:"GOOD"
        })
        .expect(200)
        .expect((res) => {
            expect(res.body.Coffee_List).toBeTruthy();
            expect(res.body.Coffee_List.length).toBeGreaterThan(0);
        })
        .end(done);
    });

    it('Should return 400 with accompanying custom error message for empty user requests', (done) => {
        request(app)
        .post('/coffee/filtered')
        .send({})
        .expect(400)
        .expect((res) => {
            expect(res.body.message).toBeTruthy();
            expect(res.body.message).toMatch("You can not make a POST request with an empty request body. Please try again");
        })
        .end(done);
    });
});



