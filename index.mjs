import glob from "glob";

/**
 * looking for our files with tests
 */
const testFiles = glob.sync("**/*.test.js");

console.log(testFiles);