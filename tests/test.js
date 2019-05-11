const request = require('supertest');
const app = require('../server');

describe('unit tests', function(){
  it('returns 200 status and Hello World from /', function(done) {
    request(app)
      .get('/')
      .expect("Hello World")
      .expect(200, done)
  });

  it("returns 200 status and json output from /status", function(done){
    request(app)
      .get("/status")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(JSON.stringify({"myapplication":[{"version":"1.0.0","description":"pre-interview technical test","lastcommitsha":"SHA_COMMIT"}]}, null, 4))
      .expect(200)
      app.close(done);
  });
});
