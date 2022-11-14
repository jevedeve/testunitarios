// TEST

const sum = require('../utiles/suma');

describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${3}       | ${1}        | ${4}
      ${-4}      | ${1}        | ${-3}
      ${3}       | ${2}        | ${5}
      ${-5}      | ${1}        | ${-4}
     ${-3}       | ${1}        | ${-2}
      ${-4}      | ${2}        | ${-2}



    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });