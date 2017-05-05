const expect = require('expect');
const romanNumerals = require('../index');

describe('Roman Numerals', function() {
  it('calculate the correct value for roman Numerals', function() {
    expect(romanNumerals('I')).toBe(1);
    expect(romanNumerals('II')).toBe(2);
    expect(romanNumerals('III')).toBe(3);
  });
});



