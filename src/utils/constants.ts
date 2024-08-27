/**
 * Built in constants
 */

const ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * The 26 upper-case letters of the Roman alphabet;
 */
export const LETTERS: string[] = ALPHABET.split('');

/**
 * The 26 lower-case letters of the Roman alphabet;
 */
export const letters: string[] = ALPHABET.toLowerCase().split('');

/**
 * The three-letter abbreviations for the English month names.
 */
export const month_abb: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

/**
 * The English names for the months of the year.
 */
export const month_name: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

/**
 * Tthe ratio of the circumference of a circle to its diameter
 */
export const pi: number = Math.PI;
