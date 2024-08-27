import { union, intersect, setdiff, setequal, isElement } from '../src/sets';

describe('Set Operations', () => {
    test('union of two sets', () => {
        expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
    });

    test('intersection of two sets', () => {
        expect(intersect([1, 2, 3], [3, 4, 5])).toEqual([3]);
        expect(intersect([1, 2], [3, 4])).toEqual([]);
    });

    test('difference between two sets', () => {
        expect(setdiff([1, 2, 3], [3, 4, 5])).toEqual([1, 2]);
        expect(setdiff([1, 2, 3], [1, 2, 3])).toEqual([]);
    });

    test('equality of two sets', () => {
        expect(setequal([1, 2, 3], [3, 2, 1])).toBe(true);
        expect(setequal([1, 2, 3], [1, 2])).toBe(false);
    });

    test('element membership in a set', () => {
        expect(isElement([1, 2, 6], [1, 2, 3, 4, 5])).toEqual([
            true,
            true,
            false
        ]);
        expect(isElement([1, 7], [1, 2, 3])).toEqual([true, false]);
    });
});
