const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Juan', 80, 1.80);
  });
  test('shold return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('shold return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
