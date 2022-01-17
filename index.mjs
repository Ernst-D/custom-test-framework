import JestHasteMap from "jest-haste-map";
import { cpus } from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const root = dirname(fileURLToPath(import.meta.url));

const hasteMap = new JestHasteMap.default({
    extensions: ['js'], // Tells jest-haste-map to only crawl .js files.
    maxWorkers: cpus().length, // Parallelizes across all available CPUs.
    name: 'best-test-framework', // Used for caching.
    platforms: [], // This is only used for React Native, leave empty.
    rootDir: root, // The project root.
    roots: [root], // Can be used to only search a subset of files within `rootDir`.
});

// Build and return an in-memory HasteFS ("Haste File System") instance.
const {hasteFS} = await hasteMap.build();

const testFiles = hasteFS.matchFilesWithGlob(["**/*.test.js"]);

console.log(testFiles);