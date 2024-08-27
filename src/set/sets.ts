/**
 * Set Operations Module
 *
 * Provides functions for performing set union, intersection, difference, equality, and membership on two arrays.
 */

/**
 * Returns the union of two arrays, discarding any duplicated values.
 *
 * @param x - First array.
 * @param y - Second array.
 * @returns An array containing the union of the two arrays.
 *
 * @example
 * union([1, 2, 3], [3, 4, 5]); // Returns [1, 2, 3, 4, 5]
 */
export function union<T>(x: T[], y: T[]): T[] {
    return Array.from(new Set([...x, ...y]));
}

/**
 * Returns the intersection of two arrays, discarding any duplicated values.
 *
 * @param x - First array.
 * @param y - Second array.
 * @returns An array containing the intersection of the two arrays.
 *
 * @example
 * intersect([1, 2, 3], [3, 4, 5]); // Returns [3]
 */
export function intersect<T>(x: T[], y: T[]): T[] {
    const setY = new Set(y);
    return Array.from(new Set(x.filter((item) => setY.has(item))));
}

/**
 * Returns the difference between two arrays (x - y), discarding any duplicated values.
 *
 * @param x - First array.
 * @param y - Second array.
 * @returns An array containing the elements that are in x but not in y.
 *
 * @example
 * setdiff([1, 2, 3], [3, 4, 5]); // Returns [1, 2]
 */
export function setdiff<T>(x: T[], y: T[]): T[] {
    const setY = new Set(y);
    return Array.from(new Set(x.filter((item) => !setY.has(item))));
}

/**
 * Checks whether two arrays are equal (contain the same elements).
 *
 * @param x - First array.
 * @param y - Second array.
 * @returns True if both arrays contain the same elements, otherwise false.
 *
 * @example
 * setequal([1, 2, 3], [3, 2, 1]); // Returns true
 */
export function setequal<T>(x: T[], y: T[]): boolean {
    const setX = new Set(x);
    const setY = new Set(y);
    if (setX.size !== setY.size) return false;
    for (let item of setX) {
        if (!setY.has(item)) return false;
    }
    return true;
}

/**
 * Checks if elements of one array are present in another array.
 *
 * @param el - The array of elements to check.
 * @param set - The array in which to check for membership.
 * @returns An array of booleans indicating membership.
 *
 * @example
 * isElement([1, 2, 6], [1, 2, 3, 4, 5]); // Returns [true, true, false]
 */
export function isElement<T>(el: T[], set: T[]): boolean[] {
    const setSet = new Set(set);
    return el.map((item) => setSet.has(item));
}
