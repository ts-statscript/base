import { seq, seq_int, seq_along, seq_len } from '../src/seq';

describe('seq', () => {
    it('generates a sequence with default parameters', () => {
        expect(seq()).toEqual([1]);
    });

    it('generates a sequence from start to end', () => {
        expect(seq(1, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    it('generates a sequence with a specific step', () => {
        expect(seq(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    });

    it('generates a sequence with a specific length', () => {
        expect(seq(1, 10, undefined, 5)).toEqual([1, 3.25, 5.5, 7.75, 10]);
    });

    it('generates a sequence based on along_with', () => {
        expect(seq(1, 10, undefined, undefined, [1, 2, 3])).toEqual([
            1, 5.5, 10
        ]);
    });

    it('generates a descending sequence', () => {
        expect(seq(5, 1)).toEqual([5, 4, 3, 2, 1]);
    });
});

describe('seq_int', () => {
    it('generates an integer sequence', () => {
        expect(seq_int(1, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    it('generates an integer sequence with a specific step', () => {
        expect(seq_int(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    });

    it('rounds non-integer results', () => {
        expect(seq_int(1, 10, undefined, 5)).toEqual([1, 3, 6, 8, 10]);
    });
});

describe('seq_along', () => {
    it('generates a sequence based on array length', () => {
        expect(seq_along([10, 20, 30])).toEqual([1, 2, 3]);
    });

    it('handles empty arrays', () => {
        expect(seq_along([])).toEqual([]);
    });
});

describe('seq_len', () => {
    it('generates a sequence of given length', () => {
        expect(seq_len(5)).toEqual([1, 2, 3, 4, 5]);
    });

    it('handles zero length', () => {
        expect(seq_len(0)).toEqual([]);
    });

    it('throws error for negative length', () => {
        expect(() => seq_len(-1)).toThrow(
            "'length_out' must be a non-negative integer"
        );
    });

    it('throws error for non-integer length', () => {
        expect(() => seq_len(3.5)).toThrow(
            "'length_out' must be a non-negative integer"
        );
    });
});
