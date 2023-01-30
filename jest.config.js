const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./jsconfig.json'); // or tsconfig.json

const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  reporters: ['default', ['jest-junit', { outputDirectory: 'reports' }]],
  moduleNameMapper: {
    ...paths,
    '^.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  testEnvironment: 'jsdom',
  testRegex: /__test__.*?\.test\.jsx?/,
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  testPathIgnorePatterns: [`node_modules`, /* other paths to ignore */],
  transform: {
    '\\.(gql|graphql)$': '@graphql-tools/jest-transform',
    '^.+\\.[jt]sx?$': '<rootDir>/jest/jestpreprocess.js',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  transformIgnorePatterns: ['!node_modules/'],
  verbose: false,
};
