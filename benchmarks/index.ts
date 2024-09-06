import {
    config,
    BenchmarkPath,
    ensureDirectoryExists,
    writeMarkdownFile
} from './utils';
import bSum from './sum.bench';

async function runBenchmarks(): Promise<void> {
    ensureDirectoryExists(config.outDir);
    ensureDirectoryExists(config.resultsPath);

    const benchmarks: BenchmarkPath[] = [await bSum()];

    let markdown = '# Benchmarks: stats\n\n';
    benchmarks.forEach((b) => {
        markdown += `- [${b.name}](${b.path})\n`;
    });

    writeMarkdownFile('benchmarks.md', markdown);
}

runBenchmarks();
