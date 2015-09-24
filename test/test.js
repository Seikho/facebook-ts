var chai = require('chai');
var api = require('../src');
var expect = chai.expect;
describe('api data structure tests', function () {
    it('will find api.settings exists', function () {
        expect(api.settings).to.exist;
    });
    it('will find api.settings to be an object', function () {
        expect(typeof api.settings).to.equal('object');
    });
    it('wil find api.accessToken exists', function () {
        expect(api.accessToken).to.exist;
    });
    it('will find api.accessToken is a function', function () {
        expect(typeof api.accessToken).to.equal('function');
    });
    it('wil find api.verfyToken exists', function () {
        expect(api.verifyToken).to.exist;
    });
    it('will find api.verifyToken is a function', function () {
        expect(typeof api.verifyToken).to.equal('function');
    });
    it('wil find api.getUser exists', function () {
        expect(api.getUser).to.exist;
    });
    it('will find api.getUser is a function', function () {
        expect(typeof api.getUser).to.equal('function');
    });
});
//# sourceMappingURL=test.js.map