import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest'

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/app/(.*)$': '<rootDir>/src/app/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
