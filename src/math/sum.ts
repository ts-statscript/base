/**
 * Calculates the sum of values in an array, with optional handling for non-numeric values.
 * This function uses loop unrolling for optimised performance.
 *
 * @param x - An array of values (may contain non-numeric elements)
 * @param handleNonNums - If true, non-numeric values are skipped; if false, their presence results in NaN
 * @returns An object containing the sum and count of processed values
 *
 * @remarks
 * Performance optimisation:
 * - Uses loop unrolling with a factor of 5 to reduce loop overhead and improve performance.
 *
 * Behavior specifics:
 * - When handleNonNums is true, non-numeric values are silently skipped.
 * - When handleNonNums is false, the presence of any non-numeric value results in { sum: NaN, count: n }.
 * - NaN values are always treated as non-numeric.
 * - Empty array input returns { sum: 0, count: 0 }.
 *
 * @example
 * sum([1, 'a', 2, null, 3], true) // Returns { sum: 6, count: 3 }
 * sum([1, 'a', 2, null, 3], false) // Returns { sum: NaN, count: 0 }
 * sum([1, 2, 3, 4, 5], true) // Returns { sum: 15, count: 5 }
 * sum([1, 2, 3, 4, 5], false) // Returns { sum: 15, count: 5 }
 * sum([], true) // Returns { sum: 0, count: 0 }
 */
export function sum(
    x: any[],
    handleNonNums: boolean = false
): { sum: number; count: number } {
    const n = x.length;
    if (n === 0) return { sum: 0, count: 0 };

    let i = 0;
    let sum = 0;
    let count = 0;

    // Main loop with unroll factor of 5
    for (; i < n - 4; i += 5) {
        const v0 = x[i],
            v1 = x[i + 1],
            v2 = x[i + 2],
            v3 = x[i + 3],
            v4 = x[i + 4];

        if (typeof v0 !== 'number' || Number.isNaN(v0)) {
            if (!handleNonNums) return { sum: NaN, count: count };
        } else {
            sum += v0;
            count++;
        }

        if (typeof v1 !== 'number' || Number.isNaN(v1)) {
            if (!handleNonNums) return { sum: NaN, count: count };
        } else {
            sum += v1;
            count++;
        }

        if (typeof v2 !== 'number' || Number.isNaN(v2)) {
            if (!handleNonNums) return { sum: NaN, count: count };
        } else {
            sum += v2;
            count++;
        }

        if (typeof v3 !== 'number' || Number.isNaN(v3)) {
            if (!handleNonNums) return { sum: NaN, count: count };
        } else {
            sum += v3;
            count++;
        }

        if (typeof v4 !== 'number' || Number.isNaN(v4)) {
            if (!handleNonNums) return { sum: NaN, count: count };
        } else {
            sum += v4;
            count++;
        }
    }

    // Handle remaining elements
    for (; i < n; i++) {
        const v = x[i];
        if (typeof v !== 'number' || Number.isNaN(v)) {
            if (!handleNonNums) return { sum: NaN, count: count };
        } else {
            sum += v;
            count++;
        }
    }

    return { sum, count };
}
