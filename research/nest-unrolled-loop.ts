/**
 * Calculates the sum of numeric values in an array, with optional strict handling for non-numeric values.
 * This version uses a fully unrolled loop for the main processing.
 */
export function sumUnrolled(
    x: any[],
    handleNonNums: boolean = false
): { sum: number; count: number } {
    const n = x.length;
    if (n === 0) return { sum: NaN, count: 0 };

    let i = 0;
    let sum = 0;
    let count = 0;

    // Main loop with explicit unrolling
    for (; i < n - 4; i += 5) {
        const v0 = x[i],
            v1 = x[i + 1],
            v2 = x[i + 2],
            v3 = x[i + 3],
            v4 = x[i + 4];

        if (typeof v0 === 'number' && !Number.isNaN(v0)) {
            sum += v0;
            count++;
        } else if (!handleNonNums) {
            return { sum: NaN, count: 0 };
        }

        if (typeof v1 === 'number' && !Number.isNaN(v1)) {
            sum += v1;
            count++;
        } else if (!handleNonNums) {
            return { sum: NaN, count: 0 };
        }

        if (typeof v2 === 'number' && !Number.isNaN(v2)) {
            sum += v2;
            count++;
        } else if (!handleNonNums) {
            return { sum: NaN, count: 0 };
        }

        if (typeof v3 === 'number' && !Number.isNaN(v3)) {
            sum += v3;
            count++;
        } else if (!handleNonNums) {
            return { sum: NaN, count: 0 };
        }

        if (typeof v4 === 'number' && !Number.isNaN(v4)) {
            sum += v4;
            count++;
        } else if (!handleNonNums) {
            return { sum: NaN, count: 0 };
        }
    }

    // Handle remaining elements
    for (; i < n; i++) {
        const v = x[i];
        if (typeof v === 'number' && !Number.isNaN(v)) {
            sum += v;
            count++;
        } else if (!handleNonNums) {
            return { sum: NaN, count: 0 };
        }
    }

    return { sum, count };
}

/**
 * Calculates the sum of numeric values in an array, with optional strict handling for non-numeric values.
 * This version uses a nested loop for the main processing.
 */
export function sumNestedLoop(
    x: any[],
    handleNonNums: boolean = false
): { sum: number; count: number } {
    const n = x.length;
    if (n === 0) return { sum: NaN, count: 0 };

    let i = 0;
    let sum = 0;
    let count = 0;

    // Main loop with nested loop for unrolling
    for (; i < n - 4; i += 5) {
        for (let j = 0; j < 5; j++) {
            const v = x[i + j];
            if (typeof v === 'number' && !Number.isNaN(v)) {
                sum += v;
                count++;
            } else if (!handleNonNums) {
                return { sum: NaN, count: 0 };
            }
        }
    }

    // Handle remaining elements
    for (; i < n; i++) {
        const v = x[i];
        if (typeof v === 'number' && !Number.isNaN(v)) {
            sum += v;
            count++;
        } else if (!handleNonNums) {
            return { sum: NaN, count: 0 };
        }
    }

    return { sum, count };
}

function benchmark(fn: Function, args: any[], iterations: number) {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        fn(...args);
    }
    const end = performance.now();
    return end - start;
}

// Create test arrays
const allNumbers = Array.from({ length: 1000000 }, () => Math.random() * 100);
const mixedContent = Array.from({ length: 1000000 }, (_, i) =>
    i % 10 === 0 ? 'not a number' : Math.random() * 100
);

// Run benchmarks
console.log('All numbers:');
console.log('Unrolled:', benchmark(sumUnrolled, [allNumbers, true], 1000));
console.log('Nested Loop:', benchmark(sumNestedLoop, [allNumbers, true], 1000));

console.log('Mixed content:');
console.log('Unrolled:', benchmark(sumUnrolled, [mixedContent, true], 1000));
console.log(
    'Nested Loop:',
    benchmark(sumNestedLoop, [mixedContent, true], 1000)
);

const res1 = sumUnrolled(allNumbers, true);
const res2 = sumNestedLoop(allNumbers, true);
console.log(
    'Results match:',
    res1.sum === res2.sum && res1.count === res2.count
);
