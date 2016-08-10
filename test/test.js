var assert = require('assert'); 
var servers = require('../server'); 
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp); 

describe('Dreams comes true', function() {
  it('Get all dreams', function(done){
    chai.request(servers)
    .get('/dreams')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
     
  });
  it('Post a dream', function(done){
    chai.request(servers)
    .post('/dreams')
    .send('name')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  }); 
});
