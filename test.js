const { add } = require('./math');

test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
  expect(add(-1, -2)).toBe(-3);
});
