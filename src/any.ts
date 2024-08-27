/**
 * Checks if any value in a list of logical vectors is true.
 *
 * @param values - A list of logical vectors (booleans) to check. Other objects of zero length are ignored, and the rest are coerced to logical ignoring any class.
 * @param naRm - If true, NA (null/undefined) values are removed before the result is computed. Default is false.
 *
 * @returns - The value returned is true if at least one of the values in the list is true, and false if all of the values are false. Otherwise, the value is undefined (which can only occur if naRm = false and the list contains no true values and at least one null/undefined value).
 *
 * @example
 * // Example 1: Basic usage
 * const x = [false, false, true, false];
 * console.log(any(x)); // Output: true
 *
 * @example
 * // Example 2: Handling NA values (null/undefined)
 * const y = [false, false, null, undefined];
 * console.log(any(y)); // Output: undefined
 * console.log(any(y, true)); // Output: false
 *
 * @example
 * // Example 3: All values false
 * const z = [false, false, false];
 * console.log(any(z)); // Output: false
 */
export function any(
    values: (boolean | null | undefined)[],
    naRm: boolean = false
): boolean | undefined {
    if (naRm) {
        values = values.filter(
            (value) => value !== null && value !== undefined
        );
    }

    for (const value of values) {
        if (value === true) {
            return true;
        }
    }

    if (values.includes(undefined) || values.includes(null)) {
        return undefined;
    }

    return false;
}
