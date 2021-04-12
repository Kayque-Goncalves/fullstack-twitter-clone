import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest/utils'

export default {
  roots: ['<rootDir>/core'],
  collectCoverageFrom: [
    '<rootDir>/core/**/*.ts',
    '!<rootDir>/core/**/*Ports.ts',
    '!**/Ports/**',
    '!**/test/**',
    '!**/config/**'
  ],

  coverageDirectory: 'coverage',
  transtform: {
    '.+\\.ts$': 'ts-jest'
  },

  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  preset: '@shelf/jest-mongodb',
  setupFiles: ['dotenv/config'],
  testEnvironment: 'node'
}
