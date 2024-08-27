import { any } from '../src';

describe('any function', () => {
    test('returns true when at least one value is true', () => {
        const values = [false, false, true, false];
        expect(any(values)).toBe(true);
    });

    test('returns false when all values are false', () => {
        const values = [false, false, false];
        expect(any(values)).toBe(false);
    });

    test('returns undefined when all values are false, null, or undefined and naRm is false', () => {
        const values = [false, null, undefined];
        expect(any(values)).toBe(undefined);
    });

    test('returns false when all values are false, null, or undefined and naRm is true', () => {
        const values = [false, null, undefined];
        expect(any(values, true)).toBe(false);
    });

    test('ignores null and undefined values when naRm is true', () => {
        const values = [false, false, null, undefined, true];
        expect(any(values, true)).toBe(true);
    });

    test('returns true if there is a true value after null/undefined values are removed', () => {
        const values = [null, undefined, true];
        expect(any(values, true)).toBe(true);
    });

    test('returns false for an empty array', () => {
        const values: boolean[] = [];
        expect(any(values)).toBe(false);
    });

    test('returns undefined for an empty array with undefined values and naRm is false', () => {
        const values: (boolean | undefined)[] = [undefined, undefined];
        expect(any(values)).toBe(undefined);
    });

    test('returns false for an empty array with undefined values and naRm is true', () => {
        const values: (boolean | undefined)[] = [undefined, undefined];
        expect(any(values, true)).toBe(false);
    });
});
