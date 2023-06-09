import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    collectCoverage: true,
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
        '\\.m?jsx?$': 'jest-esm-transformer',
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    testEnvironment: 'jsdom',
    verbose: true,
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1',
        'tests/(.*)': '<rootDir>/tests/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        "\\.(jpg|jpeg|png)$": "jest-transform-stub",
    },
};

export default config;