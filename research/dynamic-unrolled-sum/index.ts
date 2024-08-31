export function generateUnrolledSum(
    unrollFactor: number
): (x: number[]) => number {
    if (unrollFactor < 1) throw new Error('Unroll factor must be at least 1');

    let funBody = `
    let i = 0;
    let sum = 0;
    for (; i <= x.length - ${unrollFactor}; i += ${unrollFactor}) {
        sum += x[i]`;
    for (let j = 1; j < unrollFactor; j++) {
        funBody += ` + x[i + ${j}]`;
    }
    funBody += `}
    // Handle remaining elements
    for (; i < x.length; i++) {
        sum += x[i];
    }
    return sum;`;

    return new Function('x', funBody) as (x: number[]) => number;
}

export function dynamicUnrolledSum(x: number[], unrollFactor: number) {
    return generateUnrolledSum(unrollFactor)(x);
}
