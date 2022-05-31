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

  test('can multiply two small positive numbers', () => {
    expected = 20;
    actual = multiply(10, 2);
    expect(actual).toBe(expected);
  })

  test('can multiply two large positive numbers', () => {
    expected = 2250;
    actual = multiply(30, 75);
    expect(actual).toBe(expected);
  })

  test('can multiply two negative numbers', () => {
    expected = 35;
    actual = multiply(-5, -7);
    expect(actual).toBe(expected);
  })

  test('can multiply a positive and a negative number', () => {
    expected = -20;
    actual = multiply(5, -4);
    expect(actual).toBe(expected);
  })

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(10, 0);
    expect(actual).toBe(expected);
  })
});

describe('divide', () => {
  
  test('can divide two small positive numbers', () => {
    expected = 4;
    actual = divide(8, 2);
    expect(actual).toBe(expected);
  })

  test('can divide two large positive numbers', () => {
    expected = 3;
    actual = divide(750, 250);
    expect(actual).toBe(expected);
  })

  test('can divide two negative numbers', () => {
    expected = 2;
    actual = divide(-10, -5);
    expect(actual).toBe(expected);
  })

  test('can divide a positive and a negative number', () => {
    expected = -4;
    actual = divide(28, -7);
    expect(actual).toBe(expected);
  })

  test('can divide zero', () => {
    expected = Infinity;
    actual = divide(10, 0);
    expect(actual).toBe(expected);
  })
});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
