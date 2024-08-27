/**
 * Generate a sequence of numbers
 *
 * @param from - The starting number of the sequence (default: 1)
 * @param to - The end number of the sequence (default: 1)
 * @param by - The increment between sequence numbers (default: computed based on other arguments)
 * @param length_out - The desired length of the sequence
 * @param along_with - An array to match the length of the sequence to
 * @returns An array containing the generated sequence
 *
 * @example
 * seq(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * seq(1, 10, 2) // [1, 3, 5, 7, 9]
 * seq(1, 10, undefined, 5) // [1, 3.25, 5.5, 7.75, 10]
 */
export function seq(
    from: number = 1,
    to: number = 1,
    by: number | undefined = undefined,
    length_out: number | undefined = undefined,
    along_with: any[] | undefined = undefined
): number[] {
    // Handle along_with
    if (along_with !== undefined) {
        length_out = along_with.length;
    }

    // Compute 'by' if not provided
    if (by === undefined && length_out !== undefined) {
        by = (to - from) / (length_out - 1);
    } else if (by === undefined) {
        by = from <= to ? 1 : -1;
    }

    // Generate sequence based on length_out if provided
    if (length_out !== undefined) {
        const result: number[] = new Array(length_out);
        for (let i = 0; i < length_out; i++) {
            result[i] = from + i * by;
        }
        return result;
    }

    // Generate sequence based on from, to, and by
    const result: number[] = [];
    if (by > 0) {
        for (let i = from; i <= to; i += by) {
            result.push(i);
        }
    } else {
        for (let i = from; i >= to; i += by) {
            result.push(i);
        }
    }

    return result;
}

/**
 * Generate a sequence of integers
 *
 * @param from - The starting number of the sequence
 * @param to - The end number of the sequence
 * @param by - The increment between sequence numbers
 * @param length_out - The desired length of the sequence
 * @param along_with - An array to match the length of the sequence to
 * @returns An array containing the generated sequence of integers
 *
 * @example
 * seq_int(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * seq_int(1, 10, 2) // [1, 3, 5, 7, 9]
 */
export function seq_int(
    from: number,
    to: number,
    by: number | undefined = undefined,
    length_out: number | undefined = undefined,
    along_with: any[] | undefined = undefined
): number[] {
    const result = seq(from, to, by, length_out, along_with);
    return result.map(Math.round);
}

/**
 * Generate a sequence of integers from 1 to the length of the provided array
 *
 * @param along_with - An array to match the length of the sequence to
 * @returns An array containing the generated sequence
 *
 * @example
 * seq_along([10, 20, 30]) // [1, 2, 3]
 */
export function seq_along(along_with: any[]): number[] {
    return seq_len(along_with.length);
}

/**
 * Generate a sequence of integers from 1 to n
 *
 * @param length_out - The length of the sequence
 * @returns An array containing the generated sequence
 *
 * @example
 * seq_len(5) // [1, 2, 3, 4, 5]
 */
export function seq_len(length_out: number): number[] {
    if (!Number.isInteger(length_out) || length_out < 0) {
        throw new Error("'length_out' must be a non-negative integer");
    }
    return Array.from({ length: length_out }, (_, i) => i + 1);
}
