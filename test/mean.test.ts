import { mean } from '../src/mean';

describe('mean function', () => {
    test('calculates the mean of a basic array', () => {
        expect(mean([1, 2, 3, 4, 5])).toBe(3);
    });

    test('calculates the mean with trimming', () => {
        expect(mean([1, 2, 3, 4, 100], 0.2)).toBe(3);
        expect(mean([1, 2, 3, 4, 5], 0.1)).toBe(3);
    });

    test('calculates the mean with NA removal', () => {
        expect(mean([1, 2, NaN, 4, 5], 0, true)).toBe(3);
    });

    test('returns NaN if all values are NA and naRm is true', () => {
        expect(mean([NaN, null, undefined], 0, true)).toBeNaN();
    });

    test('calculates the mean with boolean values', () => {
        expect(mean([true, false, true, false])).toBe(0.5);
    });

    test('returns NaN for an empty array', () => {
        expect(mean([])).toBeNaN();
    });

    test('returns NaN if no valid values remain after trimming', () => {
        expect(mean([1, 2], 0.5)).toBeNaN();
    });
});
