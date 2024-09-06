import fs from 'fs';
import path from 'path';

export const config = {
    outDir: './benchmarks.out',
    resultsDir: 'results',
    get outFile() {
        return path.join(this.outDir, 'benchmarks.md');
    },
    get resultsPath() {
        return path.join(this.outDir, this.resultsDir);
    }
};

export function ensureDirectoryExists(dir: string): void {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

export function writeMarkdownFile(filename: string, content: string): void {
    const filePath = path.join(config.resultsPath, filename);
    fs.writeFileSync(filePath, content);
}

export interface BenchmarkPath {
    name: string;
    path: string;
}

export function generateRandomNums(n: number): number[] {
    return Array.from({ length: n }, () => Math.random() * 100);
}
