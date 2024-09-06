import {
    microbenchmark,
    BenchmarkEntry,
    benchmarkToMarkdown
} from '@ts-statscript/microbenchmark';
import { writeMarkdownFile } from './utils';
import { BenchmarkPath, generateRandomNums } from './utils';
import { sum } from '../src';

const functionName = 'sum';

function sumSimple(x: number[]): number {
    return x.reduce((acc, val) => acc + val, 0);
}

const n = 100_000;
const randomNums = generateRandomNums(n);

const benchmarks: BenchmarkEntry[] = [
    {
        name: `${functionName} - simple`,
        fn: () => sumSimple(randomNums)
    },
    {
        name: `${functionName} - unrolled`,
        fn: () => sum(randomNums)
    }
];

export default async function benchmark(): Promise<BenchmarkPath> {
    const results = await microbenchmark(benchmarks, {
        times: 100,
        warmup: 10,
        unit: 'us'
    });

    const tbl = benchmarkToMarkdown(results);

    const markdown = `
# ${functionName} benchmarks

## Algorithms

Simple sum:
\`\`\`typescript
${sumSimple.toString()}
\`\`\`

Unrolled sum:
\`\`\`typescript
${sum.toString()}
\`\`\`

## Results

${tbl}
`;

    const outfile = `${functionName}.bench.md`;
    writeMarkdownFile(outfile, markdown);

    return { name: functionName, path: outfile };
}
