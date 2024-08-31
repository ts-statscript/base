import { sum } from './sum';

/**
 * Computes the arithmetic mean of an array of numbers, with optional trimming.
 * 
 * Trimming removes a specified proportion of values from both ends of the sorted array
 * before calculating the mean, which can help reduce the impact of outliers.
 * 
 * The trimmed mean is calculated as follows:
 * 1. Sort the input array
 * 2. Remove `floor(n * trim)` elements from both ends of the sorted array
 * 3. Calculate the mean of the remaining elements
 * 
 * @param {number[]} x - The input array of numbers.
 * @param {number} [trim=0] - The proportion of data to trim from both ends (0 to 0.5).
 * @throws {Error} If `trim` is not a number between 0 and 0.5.
 * @returns {number} The calculated mean, or NaN if the input array is empty.
 * 
 * @example
 * // Calculate simple mean
 * mean([1, 2, 3, 4, 5]); // Returns 3
 * 
 * @example
 * // Calculate trimmed mean
 * mean([1, 2, 3, 4, 100], 0.2); // Returns 3 (trims one value from each end)
 */
export function mean(
    x: number[],
    trim: number = 0
): number {
    let x_copy = [...x];
    // Validate trim
    if (typeof trim !== 'number' || trim < 0 || trim > 0.5) {
        throw new Error("'trim' must be a number between 0 and 0.5");
    }

    const n = x_copy.length;

    // Handle empty array
    if (n === 0) {
        return NaN;
    }

    // Apply trimming if necessary
    if (trim > 0) {
        // Sort the array
        x_copy.sort((a, b) => a - b);

        // Calculate trimming indices
        const loIndex = Math.floor(n * trim);
        const hiIndex = n - loIndex;

        // Slice the array
        x_copy = x_copy.slice(loIndex, hiIndex);
    }

    // Calculate mean
    return sum(x_copy) / x_copy.length;
}