const getArea = require('../area');

test('correct area 3 * 4 = 12', () => {
  expect(getArea([3,4])).toBe(12);
});

test('correct area 0 * 4 = 0', () => {
  expect(getArea([0,4])).toBe(0);
});

test('correct area 3 * 0 = 0', () => {
  expect(getArea([3,0])).toBe(0);
});

test('input not an Array result -1', () => {
  expect(getArea(12)).toBe(-1);
});

test('input is an Array but with less than 2 element result -1', () => {
  expect(getArea([1])).toBe(-1);
});

test('input is an Array but with more than 2 element result -1', () => {
  expect(getArea([1,2,3])).toBe(-1);
});

test('input is an Array with 2 element but first element is not an integer result -1', () => {
  expect(getArea(["1",2])).toBe(-1);
});

test('input is an Array with 2 element but second element is not an integer result -1', () => {
  expect(getArea([1,"ac"])).toBe(-1);
});

test('input is an Array with 2 element but both element are not an integer result -1', () => {
  expect(getArea(["abc","2"])).toBe(-1);
});

test('input is an Array with 2 element but first element is negative result -1', () => {
  expect(getArea([-5,3])).toBe(-1);
});

test('input is an Array with 2 element but second element is negative result -1', () => {
  expect(getArea([5,-3])).toBe(-1);
});