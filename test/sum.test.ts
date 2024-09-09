import { sum } from '../src';

describe('sum function', () => {
    it('should correctly sum an array of numbers', () => {
        expect(sum([1, 2, 3, 4, 5])).toEqual({ sum: 15, count: 5 });
    });

    it('should return 0 for an empty array', () => {
        expect(sum([])).toEqual({ sum: 0, count: 0 });
    });

    it('should handle non-numeric values when handleNonNums is true', () => {
        expect(sum([1, 'a', 2, null, 3, undefined, 4, NaN, 5], true)).toEqual({
            sum: 15,
            count: 5
        });
    });

    it('should return NaN and correct count when handleNonNums is false and non-numeric value is encountered', () => {
        expect(sum([1, 2, 'a', 3, 4])).toEqual({ sum: NaN, count: 2 });
        expect(sum([1, 2, 3, null, 4])).toEqual({ sum: NaN, count: 3 });
        expect(sum([NaN, 1, 2, 3, 4])).toEqual({ sum: NaN, count: 0 });
    });

    it('should handle arrays with length not divisible by 5', () => {
        expect(sum([1, 2, 3, 4, 5, 6, 7])).toEqual({ sum: 28, count: 7 });
    });

    it('should handle arrays with length less than 5', () => {
        expect(sum([1, 2, 3])).toEqual({ sum: 6, count: 3 });
    });

    it('should handle arrays with only non-numeric values when handleNonNums is true', () => {
        expect(sum(['a', 'b', 'c'], true)).toEqual({ sum: 0, count: 0 });
    });

    it('should handle arrays with only non-numeric values when handleNonNums is false', () => {
        expect(sum(['a', 'b', 'c'], false)).toEqual({ sum: NaN, count: 0 });
    });

    it('should handle arrays with Infinity', () => {
        expect(sum([1, 2, Infinity, 3])).toEqual({ sum: Infinity, count: 4 });
    });

    it('should handle alternating numeric and non-numeric values', () => {
        expect(sum([1, 'a', 2, 'b', 3, 'c', 4, 'd', 5], true)).toEqual({
            sum: 15,
            count: 5
        });
    });
});
