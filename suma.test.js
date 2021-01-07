const add = require('./suma');


describe('Testing function add', () => {
    it('Sumando numeros', () => {
        expect(add(5,5)).toBe(10);
        expect(add(5,'a')).not.toBe(10);
  
    });
  });