/**
 * Compute sum of number array using loop unrolling.
 *
 * This function uses an unroll factor of 5 to optimise performance. It processes
 * five elements at a time in the main loop, potentially reducing loop overhead and
 * improving instruction-level parallelism. Any remaining elements are processed
 * individually in a final loop.
 *
 * This function assumes all input values are valid numbers. It does not handle NaN, null, undefined, or boolean values.
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
 */
export function sum(x: number[]): number {
    let i = 0;
    let sum = 0;

    // Main loop with unroll factor of 5
    for (; i < x.length - 4; i += 5) {
        sum += x[i] + x[i + 1] + x[i + 2] + x[i + 3] + x[i + 4];
    }

    // Handle remaining elements
    for (; i < x.length; i++) {
        sum += x[i];
    }

    return sum;
}
