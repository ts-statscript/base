import { sum } from './sum';

/**
 * Computes the arithmetic mean of the values present in the array.
 *
 * @param x - Array of numeric, logical, or complex values. Logical true values are treated as 1, and false values as 0.
 * @param trim - The fraction (0 to 0.5) of observations to be trimmed from each end of x before the mean is computed. Default is 0 (no trimming).
 * @param naRm - Should missing values (null, undefined, NaN) be removed? Default is false.
 *
 * @returns The arithmetic mean of the values, or NaN if the result cannot be computed (e.g., if all values are removed).
 *
 * @example
 * // Example 1: Basic mean calculation
 * console.log(mean([1, 2, 3, 4, 5])); // Output: 3
 *
 * @example
 * // Example 2: Mean calculation with trimming
 * console.log(mean([1, 2, 3, 4, 100], 0.2)); // Output: 3
 *
 * @example
 * // Example 3: Mean calculation with NA removal
 * console.log(mean([1, 2, NaN, 4, 5], 0, true)); // Output: 3
 */
export function mean(
    x: (number | boolean | null | undefined)[],
    trim: number = 0,
    naRm: boolean = false
): number {
    // Remove NA values if naRm is true
    if (naRm) {
        x = x.filter(
            (value) =>
                value !== null && value !== undefined && !isNaN(value as number)
        );
    }

    // Convert boolean values to numeric equivalents
    x = x.map((value) =>
        typeof value === 'boolean' ? (value ? 1 : 0) : value
    );

    // Handle trimming
    if (trim > 0 && trim < 0.5) {
        const sortedX = [...x].sort((a, b) => (a as number) - (b as number));
        const n = sortedX.length;
        const trimCount = Math.floor(n * trim);
        x = sortedX.slice(trimCount, n - trimCount);
    }

    // Calculate the mean
    const total = sum(x as number[], false);
    const n = x.length;

    return n > 0 ? total / n : NaN;
}
