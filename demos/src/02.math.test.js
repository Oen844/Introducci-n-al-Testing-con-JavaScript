const {
  sum, multiply, divide, midium,
} = require('./02.math');

test('adds 1 + 3, should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('adds 1 * 4, should be 4', () => {
  const rta = multiply(1, 4);
  expect(rta).toBe(4);
});

test('Should divide', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});
test('Should divide', () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();
  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();
});
test('Should midium', () => {
  const rta = midium(6, 0);
  expect(rta).toBe(3);
  const rta2 = midium(0, 0);
  expect(rta2).toBeNull();
});
