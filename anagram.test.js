const isAnagram = require('./anagrama');

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('Cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});

test('Prueba negativa por que si', () => {
  expect(isAnagram('Castillo', 'casa')).toBeFalsy();
});

test('"Probar solo letras sin significado"', () => {
  expect(isAnagram('twe', 'ewt')).toBeTruthy();
});

test('"Probar solo unas letras"', () => {
  expect(isAnagram('ondii', 'indio')).toBeTruthy();
});

test('"Probar solo unas letras dos "', () => {
  expect(isAnagram('frase', 'fresa')).toBeTruthy();
});
