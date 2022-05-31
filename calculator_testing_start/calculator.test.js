const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 250;
    actual = sum(170, 80);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -30;
    actual = sum(-10, -20);
    expect(actual).toBe(expected);
  });

  test('can add one positive number and one negative', () => {
    expected = 10;
    actual = sum(15, -5);
    expect(actual).toBe(expected);
  })

  test('can add zero', () => {
    expected = 25;
    actual = sum(25, 0);
    expect(actual).toBe(expected);
  });
});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 4;
    actual = subtract(6, 2);
    expect(actual).toBe(expected);
  })

  test('can subtract two large positive numbers', () => {
    expected = 130;
    actual = subtract(250, 120);
    expect(actual).toBe(expected);
  })

  test('can subtract two negative numbers', () => {
    expected = -10;
    actual = subtract(-20, -10);
    expect(actual).toBe(expected);
  })

  test('can subtract a positive number and a negative number', () => {
    expected = 15;
    actual = subtract(10, -5);
    expect(actual).toBe(expected);
  })

  test('can subtract zero', () => {
    expected = 4;
    actual = subtract(4, 0);
    expect(actual).toBe(expected);
  })
});

describe('multiply', () => {

  test('')
});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
