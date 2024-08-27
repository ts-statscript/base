import { rep, rep_int, rep_len } from '../src/rep'; // Adjust the import path as needed

describe('rep function', () => {
    it('should repeat the entire array when given a number', () => {
        expect(rep([1, 2, 3], 2)).toEqual([1, 2, 3, 1, 2, 3]);
    });

    it('should repeat each element according to the times array', () => {
        expect(rep([1, 2, 3], [2, 1, 3])).toEqual([1, 1, 2, 3, 3, 3]);
    });

    it('should repeat to a specific length', () => {
        expect(rep([1, 2, 3], undefined, 8)).toEqual([1, 2, 3, 1, 2, 3, 1, 2]);
    });

    it('should use the each parameter correctly', () => {
        expect(rep([1, 2, 3], 2, undefined, 2)).toEqual([
            1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3
        ]);
    });

    it('should return an empty array when input is empty', () => {
        expect(rep([])).toEqual([]);
    });

    it("should throw an error when times array length doesn't match input array length", () => {
        expect(() => rep([1, 2, 3], [2, 1])).toThrow(
            "Invalid 'times' argument"
        );
    });

    it('should work with string arrays', () => {
        expect(rep(['a', 'b'], 2)).toEqual(['a', 'b', 'a', 'b']);
    });
});

describe('rep_int function', () => {
    it('should repeat the entire array the specified number of times', () => {
        expect(rep_int([1, 2, 3], 2)).toEqual([1, 2, 3, 1, 2, 3]);
    });

    it('should return an empty array when input is empty', () => {
        expect(rep_int([], 5)).toEqual([]);
    });

    it('should return an empty array when times is 0', () => {
        expect(rep_int([1, 2, 3], 0)).toEqual([]);
    });

    it('should work with string arrays', () => {
        expect(rep_int(['a', 'b'], 3)).toEqual(['a', 'b', 'a', 'b', 'a', 'b']);
    });
});

describe('rep_len function', () => {
    it('should repeat to the specified length', () => {
        expect(rep_len([1, 2, 3], 8)).toEqual([1, 2, 3, 1, 2, 3, 1, 2]);
    });

    it('should truncate when length_out is less than input length', () => {
        expect(rep_len([1, 2, 3, 4], 2)).toEqual([1, 2]);
    });

    it('should return an empty array when length_out is 0', () => {
        expect(rep_len([1, 2, 3], 0)).toEqual([]);
    });

    it('should return an empty array when input is empty', () => {
        expect(rep_len([], 5)).toEqual([]);
    });

    it('should work with string arrays', () => {
        expect(rep_len(['a', 'b'], 5)).toEqual(['a', 'b', 'a', 'b', 'a']);
    });
});
