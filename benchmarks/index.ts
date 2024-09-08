import { config, BenchmarkPath, ensureDirectoryExists } from './utils';
import fs from 'fs';
import path from 'path';

import bSum from './sum.bench';

async function runBenchmarks(): Promise<void> {
    ensureDirectoryExists(config.outDir);
    ensureDirectoryExists(config.benchmarksPath);

    const benchmarks: BenchmarkPath[] = [await bSum()];

    let markdown = '# Benchmarks: stats\n\n';
    benchmarks.forEach((b) => {
        markdown += `- [${b.name}](${path.join(config.benchmarksDir, b.path)})\n`;
    });

    fs.writeFileSync(config.outFile, markdown);
}

runBenchmarks();
