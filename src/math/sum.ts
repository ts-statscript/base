/**
 * Computes the sum of all the values present in its arguments.
 *
 * @param naRm - Should missing values (null, undefined, NaN) be removed? Default is false.
 * @param values - Numeric, logical, or complex values. Logical true values are treated as 1, and false values as 0.
 *
 * @returns The sum of all the values. If naRm is false and any value is null, undefined, or NaN, the result is NaN. Otherwise, such values are ignored.
 *
 * @example
 * // Example 1: Sum of a range of numbers
 * console.log(sum([1, 2, 3, 4, 5])); // Output: 15
 *
 * @example
 * // Example 2: Sum with a missing value, naRm = false
 * console.log(sum([1, 2, NaN, 4, 5])); // Output: NaN
 *
 * @example
 * // Example 3: Sum with a missing value, naRm = true
 * console.log(sum([1, 2, NaN, 4, 5], true)); // Output: 12
 *
 * @example
 * // Example 4: Sum of logical values
 * console.log(sum([true, false, true])); // Output: 2
 */
function classicSum(
    values: (number | boolean | null | undefined)[],
    naRm: boolean = false
): number {
    if (naRm) {
        values = values.filter((value) => {
            return (
                value !== null && value !== undefined && !isNaN(value as number)
            );
        });
    }

    let total = 0;
    for (const value of values) {
        if (typeof value === 'boolean') {
            total += value ? 1 : 0;
        } else if (typeof value === 'number' && !isNaN(value)) {
            total += value;
        } else {
            return NaN;
        }
    }

    return total;
}

/**
 * Computes the sum of all the numeric values in the input array using loop unrolling.
 *
 * This function uses an unroll factor of 5 to optimise performance. It processes
 * five elements at a time in the main loop, potentially reducing loop overhead and
 * improving instruction-level parallelism. Any remaining elements are processed
 * individually in a final loop.
 *
 * @param x - An array of numbers to be summed.
 * @returns The sum of all numbers in the input array.
 *
 * @example
 * // Example 1: Sum of a range of numbers
 * console.log(sum([1, 2, 3, 4, 5])); // Output: 15
 *
 * @example
 * // Example 2: Sum of a larger array
 * const largeArray = Array.from({length: 1_000_000}, (_, i) => i + 1);
 * console.log(sum(largeArray)); // Output: 500000500000
 *
 * @note This function assumes all input values are valid numbers. It does not
 * handle NaN, null, undefined, or boolean values.
 */
export function sum(x: number[]): number {
    let i = 0;
    let sum = 0;

    // Main loop with unroll factor of 5
    for (; i < x.length - 5; i += 5) {
        sum += x[i] + x[i + 1] + x[i + 2] + x[i + 3] + x[i + 4];
    }

    // Handle remaining elements
    for (; i < x.length; i++) {
        sum += x[i];
    }

    return sum;
}
