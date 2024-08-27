/**
 * Calculates the arithmetic mean of a numeric array.
 *
 * @param x - An array of numbers.
 * @param trim - The fraction (0 to 0.5) of observations to be trimmed from each end of x before the mean is computed. Default is 0.
 * @param naRm - A boolean indicating whether NA values should be removed before computation. Default is false.
 * @returns The arithmetic mean of the input array.
 *
 * @example
 * mean([1, 2, 3, 4, 5]); // Returns 3
 * mean([1, 2, 3, 4, 5, NaN], false, true); // Returns 3
 * mean([1, 2, 3, 4, 50], 0.2); // Returns 3 (trims the lowest and highest values)
 *
 * @throws {Error} If the input is not a numeric array or if trim is not between 0 and 0.5.
 */
export function mean(
    x: number[],
    trim: number = 0,
    naRm: boolean = false
): number {
    // Check if input is numeric
    if (!x.every((val) => typeof val === 'number')) {
        throw new Error('Argument is not numeric: returning NaN');
    }

    // Remove NaN values if naRm is true
    if (naRm) {
        x = x.filter((val) => !isNaN(val));
    }

    // Validate trim
    if (typeof trim !== 'number' || trim < 0 || trim > 0.5) {
        throw new Error("'trim' must be a number between 0 and 0.5");
    }

    const n = x.length;

    // Handle empty array
    if (n === 0) {
        return NaN;
    }

    // Apply trimming if necessary
    if (trim > 0) {
        // Sort the array
        x.sort((a, b) => a - b);

        // Calculate trimming indices
        const loIndex = Math.floor(n * trim);
        const hiIndex = n - loIndex;

        // Slice the array
        x = x.slice(loIndex, hiIndex);
    }

    // Calculate mean
    const sum = x.reduce((acc, val) => acc + val, 0);
    return sum / x.length;
}
