const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  //Arrange / Given
  beforeEach(() => {
    person = new Person('Juan', 80, 1.80);
  });
  test('shold return down', () => {
    //Arrange / Given
    person.weight = 45;
    //Act / When
    const imc = person.calcIMC();
    //Assert / Then
    expect(imc).toBe('down');
  });

  test('shold return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
