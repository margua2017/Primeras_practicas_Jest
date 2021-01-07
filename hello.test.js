const hello = require('./hello');


describe('hello', () => {
    it('should output hello', () => {
        expect(hello()).toBe('Hello');
  
    });
  });