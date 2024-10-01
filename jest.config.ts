import 'reflect-metadata';
import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

const { compilerOptions } = require('./tsconfig.json');

const config: Config = {
  // All imported modules in your tests should be mocked automatically
  automock: false,

  // Stop running tests after `n` failures
  bail: 1,

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '**/*.ts',
    '!**/*.test.ts',
    '!**/*.fixture.ts',
    '!**/*.spec.ts'
  ],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    'src/*/I[A-z]*.ts',
    'src/tests/*/*.test.ts',
    'src/tests/*/*.fixture.ts',
    'src/tests/*/*.spec.ts'
  ],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    ['lcovonly', { file: 'lcov/lcov.info' }],
    'lcov',
    ['json', { file: 'json-report.json' }],
    ['clover', { file: 'clover-report.xml' }],
    ['text', { file: 'text-report.txt' }],
  ],

  // Sonar genreric test execution reporter
  reporters: ['default'],

  //An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    "node_modules"
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'ts',
  ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  modulePaths: [compilerOptions.baseUrl],
  //moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' }),
  // moduleNameMapper: {
  //   '^@config/(.*)$': '<rootDir>/config/$1',
  //   '^@items/(.*)$': '<rootDir>/items/$1',
  // },
  
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The root directory that Jest should scan for tests and modules within
  rootDir: './',

  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>/src"],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: ["jest-canvas-mock"],
  setupFiles: ['reflect-metadata'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: [
  ],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The regexp pattern or array of patterns that Jest uses to detect test files
  //testRegex: ['.*\\.spec\\.ts$'/*, '.*\\.fixture\\.ts$'*/],
  testRegex: 'src/tests/.+\\.spec\\.ts$', // Regex pour les fichiers .spec.ts

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(t)s$': ['ts-jest', {}],
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

export default config;
