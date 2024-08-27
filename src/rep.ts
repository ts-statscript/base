/**
 * Replicate elements of vectors and lists
 *
 * @param x - The vector to replicate
 * @param times - Number of times to repeat each element of x
 * @param length_out - Desired length of output vector
 * @param each - Number of times to repeat each element of x before moving to the next
 * @returns An array containing the replicated elements
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
    } else {
        const result: T[] = [];
        for (let i = 0; i < x.length; i++) {
            for (let j = 0; j < times[i]; j++) {
                for (let k = 0; k < each; k++) {
                    result.push(x[i]);
                }
            }
        }
        return result;
    }
}

/**
 * Replicate elements of vectors and lists
 *
 * @param x - The vector to replicate
 * @param times - Number of times to repeat each element of x
 * @returns An array containing the replicated elements
 */
export function rep_int<T>(x: T[], times: number | number[]): T[] {
    return rep(x, times);
}

/**
 * Replicate elements of vectors and lists to a specified length
 *
 * @param x - The vector to replicate
 * @param length_out - Desired length of output vector
 * @returns An array containing the replicated elements
 */
export function rep_len<T>(x: T[], length_out: number): T[] {
    return rep(x, undefined, length_out);
}
