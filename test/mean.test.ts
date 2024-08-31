import { mean } from '../src';

describe('mean function', () => {
    test('calculates the arithmetic mean of numeric values', () => {
        expect(mean([1, 2, 3, 4, 5])).toBe(3);
    });

    test('handles arrays with a single element', () => {
        expect(mean([42])).toBe(42);
    });

    test('returns NaN for empty arrays', () => {
        expect(mean([])).toBeNaN();
    });

    test('calculates trimmed mean', () => {
        expect(mean([1, 2, 3, 4, 50], 0.2)).toBe(3);
    });

    test('returns NaN if no valid values remain after trimming', () => {
        expect(mean([1, 2], 0.5)).toBeNaN();
    });

    test('throws error for invalid trim values', () => {
        expect(() => mean([1, 2, 3], -0.1)).toThrow(
            "'trim' must be a number between 0 and 0.5"
        );
        expect(() => mean([1, 2, 3], 0.6)).toThrow(
            "'trim' must be a number between 0 and 0.5"
        );
    });

    test('handles arrays with identical values', () => {
        expect(mean([5, 5, 5, 5, 5])).toBe(5);
    });

    test('handles large arrays', () => {
        const largeArray = Array(1000000).fill(1);
        expect(mean(largeArray)).toBe(1);
    });

    test('handles arrays with very small and very large numbers', () => {
        expect(mean([1e-10, 1e10])).toBe(5e9);
    });

    test('returns the correct result for arrays with positive and negative numbers', () => {
        expect(mean([-10, -5, 0, 5, 10])).toBe(0);
    });

    test('handles trimming with decimal places', () => {
        expect(mean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0.15)).toBe(5.5);
    });

    test('handles arrays with NaN values', () => {
        expect(mean([1, 2, NaN, 4, 5])).toBeNaN();
    });
});
