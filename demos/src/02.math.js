function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if(b === 0) {
    return null;
  }
  return a / b;
}

function midium(a, b) {
  if(b === 0 && a === 0) {
    return null;
  }
  return (a + b) / 2;
}

module.exports = {
  sum,
  multiply,
  divide,
  midium,
};
