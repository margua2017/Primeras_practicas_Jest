//Test
//1 corregir los archivos APP
//Separar las pruebas en diferentes scripts
//Resultado final: 6 scripts (3 las funciones a probar) (3 las pruebas)
//jest o mocha usar uno o otro


describe('hello', () => {
    it('should output hello', () => {
      expect(hello()).toBe('Hello');
    });
  });
  
  
  //Mocha & Chai
  describe('removeSNames', () => {
    it('should remove all s names', () => {
      const names = ['Scott', 'Courtney', 'Steve'];
      expect(removeSNames(names)).not.toContain('Scott');
      expect(removeSNames(names)).not.toContain('Steve');
    });
  
    it('should not remove other names', () => {
      const names = ['Scott', 'Courtney', 'Wes'];
      expect(removeSNames(names)).toContain('Courtney');
      expect(removeSNames(names)).toContain('Wes');
    });
    it('should account for case', () => {
      const names = ['Scott', 'Courtney', 'Wes', 'scott'];
      expect(removeSNames(names)).not.toContain('Scott');
      expect(removeSNames(names)).not.toContain('scott');
    });
  });

  



removeSNames = (names) => {
    var names = [];
    var nleng;
    var name;
    nleng= names.length;
   for (i = 0; i < nleng; i++) {
      name=names[i].chartAt(0);
      if (name == 'S'){
          delete names[i];
      }
      
  }
return names;

}