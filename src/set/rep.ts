/**
 * Replicates elements of an array.
 *
 * This function can repeat the entire array, repeat individual elements,
 * or create an array of a specific length by cycling through the input array.
 *
 * @param x - The array to replicate.
 * @param times - Number of times to repeat the entire array, or an array specifying the number of times to repeat each element.
 * @param length_out - Desired length of the output array.
 * @param each - Number of times to repeat each element of x before moving to the next.
 * @returns A new array containing the replicated elements.
 *
 * @example
 * // Repeat the entire array
 * rep([1, 2, 3], 2)  // Returns [1, 2, 3, 1, 2, 3]
 *
 * // Repeat each element
 * rep([1, 2, 3], [2, 1, 3])  // Returns [1, 1, 2, 3, 3, 3]
 *
 * // Repeat to a specific length
 * rep([1, 2, 3], undefined, 8)  // Returns [1, 2, 3, 1, 2, 3, 1, 2]
 *
 * // Use 'each' parameter
 * rep([1, 2, 3], 2, undefined, 2)  // Returns [1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3]
 */
export function rep<T>(
    x: T[],
    times?: number | number[],
    length_out?: number,
    each?: number
): T[] {
    if (x.length === 0) return [];

    each = each || 1;

    if (length_out !== undefined) {
        const result: T[] = [];
        let i = 0;
        while (result.length < length_out) {
            for (let j = 0; j < each && result.length < length_out; j++) {
                result.push(x[i % x.length]);
            }
            i++;
        }
        return result;
    }

    if (times === undefined) {
        times = 1;
    }

    if (typeof times === 'number') {
        const result: T[] = [];
        for (let i = 0; i < times; i++) {
            for (const item of x) {
                for (let j = 0; j < each; j++) {
                    result.push(item);
                }
            }
        }
        return result;
    } else if (Array.isArray(times)) {
        if (times.length !== x.length) {
            throw new Error("Invalid 'times' argument");
        }
        const result: T[] = [];
        for (let i = 0; i < x.length; i++) {
            for (let j = 0; j < times[i]; j++) {
                for (let k = 0; k < each; k++) {
                    result.push(x[i]);
                }
            }
        }
        return result;
    } else {
        throw new Error("Invalid 'times' argument");
    }
}

/**
 * Replicates elements of an array a specified number of times.
 *
 * This is a simplified version of rep where 'times' must be a number.
 *
 * @param x - The array to replicate.
 * @param times - Number of times to repeat the entire array.
 * @returns A new array containing the replicated elements.
 *
 * @example
 * rep_int([1, 2, 3], 2)  // Returns [1, 2, 3, 1, 2, 3]
 */
export function rep_int<T>(x: T[], times: number): T[] {
    return rep(x, times);
}

/**
 * Replicates elements of an array to create a new array of a specified length.
 *
 * If the desired length is greater than the input array length, the input array
 * will be cycled. If it's shorter, the input array will be truncated.
 *
 * @param x - The array to replicate.
 * @param length_out - Desired length of the output array.
 * @returns A new array containing the replicated elements.
 *
 * @example
 * rep_len([1, 2, 3], 8)  // Returns [1, 2, 3, 1, 2, 3, 1, 2]
 * rep_len([1, 2, 3, 4], 2)  // Returns [1, 2]
 */
export function rep_len<T>(x: T[], length_out: number): T[] {
    return rep(x, undefined, length_out);
}
