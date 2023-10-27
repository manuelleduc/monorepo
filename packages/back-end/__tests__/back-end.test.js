const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../lib/back-end'); // Import the Express app

// using request server as chaiHttp;
chai.use(chaiHttp);
const expect = chai.expect;

describe('Backend Server', () => {
  it('should log a request and process payment', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Backend Server: Running!');
        done();
      });
  });
});
