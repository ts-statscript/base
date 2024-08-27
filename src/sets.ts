/**
 * Set Operations Module
 *
 * Provides functions for performing set union, intersection, difference, equality, and membership on two vectors.
 */

/**
 * Returns the union of two sets, discarding any duplicated values.
 *
 * @param x - First vector.
 * @param y - Second vector.
 * @returns A vector containing the union of the two sets.
 *
 * @example
 * union([1, 2, 3], [3, 4, 5]); // Returns [1, 2, 3, 4, 5]
 */
export function union<T>(x: T[], y: T[]): T[] {
    return Array.from(new Set([...x, ...y]));
}

/**
 * Returns the intersection of two sets, discarding any duplicated values.
 *
 * @param x - First vector.
 * @param y - Second vector.
 * @returns A vector containing the intersection of the two sets.
 *
 * @example
 * intersect([1, 2, 3], [3, 4, 5]); // Returns [3]
 */
export function intersect<T>(x: T[], y: T[]): T[] {
    const setY = new Set(y);
    return Array.from(new Set(x.filter((item) => setY.has(item))));
}

/**
 * Returns the difference between two sets (x - y), discarding any duplicated values.
 *
 * @param x - First vector.
 * @param y - Second vector.
 * @returns A vector containing the elements that are in x but not in y.
 *
 * @example
 * setdiff([1, 2, 3], [3, 4, 5]); // Returns [1, 2]
 */
export function setdiff<T>(x: T[], y: T[]): T[] {
    const setY = new Set(y);
    return Array.from(new Set(x.filter((item) => !setY.has(item))));
}

/**
 * Checks whether two sets are equal (contain the same elements).
 *
 * @param x - First vector.
 * @param y - Second vector.
 * @returns True if both sets contain the same elements, otherwise false.
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
 * Checks if elements of one vector are present in another vector.
 *
 * @param el - The vector of elements to check.
 * @param set - The set in which to check for membership.
 * @returns A vector of booleans indicating membership.
 *
 * @example
 * isElement([1, 2, 6], [1, 2, 3, 4, 5]); // Returns [true, true, false]
 */
export function isElement<T>(el: T[], set: T[]): boolean[] {
    const setSet = new Set(set);
    return el.map((item) => setSet.has(item));
}
