import chai = require('chai');
import api = require('../src');
var expect = chai.expect;


describe('api data structure tests', () => {
   
   it('will find api.settings exists', () => {
       expect(api.settings).to.exist;
   });
   
   it('will find api.settings to be an object', () => {
       expect(typeof api.settings).to.equal('object');
   });
   
   it('wil find api.accessToken exists', () => {
       expect(api.accessToken).to.exist;
   });
   
   it('will find api.accessToken is a function', () => {
       expect(typeof api.accessToken).to.equal('function');
   });
   
   it('wil find api.verfyToken exists', () => {
       expect(api.verifyToken).to.exist;
   });
   
   it('will find api.verifyToken is a function', () => {
       expect(typeof api.verifyToken).to.equal('function');
   });
   
   it('wil find api.getUser exists', () => {
       expect(api.getUser).to.exist;
   });
   
   it('will find api.getUser is a function', () => {
       expect(typeof api.getUser).to.equal('function');
   });
    
});