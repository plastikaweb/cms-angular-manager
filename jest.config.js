module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main.ts',
    '!src/polyfills.ts',
    '!src/**/*.d.ts',
    '!src/**/*.module.ts',
    '!src/environments/**/*.ts',
    '!src/**/index.ts',
    '!src/config/**/*.ts',
  ],
  coverageReporters: ['json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/app/$1',
    '@shared/(.*)$': '<rootDir>/src/shared/$1',
    '@environments/(.*)$': '<rootDir>/src/environments/$1',
    '@config/(.*)$': '<rootDir>/src/config/$1',
  },
};
