/**
 * Computes the sum of all the values present in its arguments.
 *
 * @param values - Numeric, logical, or complex values. Logical true values are treated as 1, and false values as 0.
 * @param naRm - Should missing values (null, undefined, NaN) be removed? Default is false.
 *
 * @returns The sum of all the values. If naRm is false and any value is null, undefined, or NaN, the result is NaN. Otherwise, such values are ignored.
 *
 * @example
 * // Example 1: Sum of a range of numbers
 * console.log(sum([1, 2, 3, 4, 5])); // Output: 15
 *
 * @example
 * // Example 2: Sum of several numbers passed as arguments
 * console.log(sum([1, 2, 3], [4, 5])); // Output: 15
 *
 * @example
 * // Example 3: Sum with a missing value, naRm = false
 * console.log(sum([1, 2, NaN, 4, 5])); // Output: NaN
 *
 * @example
 * // Example 4: Sum with a missing value, naRm = true
 * console.log(sum([1, 2, NaN, 4, 5], true)); // Output: 12
 *
 * @example
 * // Example 5: Sum of logical values
 * console.log(sum([true, false, true])); // Output: 2
 */
function sum(
    values: (number | boolean | null | undefined)[],
    naRm: boolean = false
): number {
    if (naRm) {
        values = values.filter(
            (value) =>
                value !== null && value !== undefined && !isNaN(value as number)
        );
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
