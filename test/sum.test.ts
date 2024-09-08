import { sum } from '../src';

describe('sum function', () => {
    test('sums a range of numbers', () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('returns NaN if a NaN value is present', () => {
        expect(sum([1, 2, NaN, 4, 5])).toBeNaN();
    });

    test('returns NaN for an empty array', () => {
        expect(sum([])).toBeNaN();
    });

    test('returns NaN if the array contains only NaN', () => {
        expect(sum([NaN, NaN])).toBeNaN();
    });

    test('returns NaN if the array contains a null or undefined value', () => {
        expect(sum([1, 2, null, undefined, 3] as any)).toBeNaN();
    });
});
