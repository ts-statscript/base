import { sum } from '../src';

describe('sum function', () => {
    test('sums a range of numbers', () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('returns NaN if a NaN value is present and naRm is false', () => {
        expect(sum([1, 2, NaN, 4, 5])).toBeNaN();
    });

    test('ignores NaN if naRm is true', () => {
        expect(sum([1, 2, NaN, 4, 5], true)).toBe(12);
    });

    test('handles logical values, treating true as 1 and false as 0', () => {
        expect(sum([true, false, true])).toBe(2);
    });

    test('returns 0 for an empty array', () => {
        expect(sum([])).toBe(0);
    });

    test('returns NaN if the array contains only NaN and naRm is false', () => {
        expect(sum([NaN, NaN])).toBeNaN();
    });

    test('returns 0 if the array contains only NaN and naRm is true', () => {
        expect(sum([NaN, NaN], true)).toBe(0);
    });

    test('ignores null and undefined if naRm is true', () => {
        expect(sum([1, 2, null, undefined, 3], true)).toBe(6);
    });

    test('returns NaN if null or undefined is present and naRm is false', () => {
        expect(sum([1, 2, null, 3])).toBeNaN();
        expect(sum([1, 2, undefined, 3])).toBeNaN();
    });
});
