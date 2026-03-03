/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {},             // no transformation needed for plain JS
  testEnvironment: 'node',   // Node environment
  roots: ['<rootDir>/tests'], // look for test files in tests/
  testMatch: ['**/*.test.js'], // match all *.test.js files
};

export default config;