import calculate from "../logic/calculate";

describe('calculate', () => {
    test('equals operator should display result', () => {
        expect(calculate({ total: 5, next: '3', operation: '+' }, '=')).toEqual({
          total: '8',
          next: null,
          operation: null,
        });
      });
    test('A/C button should clear data displayed', () => {
      expect(calculate({ total: 5, next: null, operation: '+' }, 'A/C')).toEqual({
        total: null,
        next: null,
        operation: null,
      });
    });
    test('should calculate the correct', () => {
        expect(calculate({ total: '7', next: '3', operation: 'x' }, '=')).toEqual({
          total: '21',
          next: null,
          operation: null,
        });
      });
})