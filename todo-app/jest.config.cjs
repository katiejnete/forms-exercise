// jest.config.js
module.exports = {
    transform: {
      '\\.css$': 'jest-transform-stub',
      '^.+\\.[jt]sx?$': 'babel-jest', // Use babel-jest to transform JavaScript and TypeScript files
    },
    testEnvironment: 'jsdom', // Use jsdom if you're testing a web environment
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  };
  