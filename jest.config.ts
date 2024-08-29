import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Utiliza ts-jest como preset para trabajar con TypeScript
  testEnvironment: 'node', // Esto es importante si tus tests dependen de APIs de Node.js
  clearMocks: true,
  moduleFileExtensions: ['ts', 'js'], // Para asegurarse de que Jest pueda manejar archivos .ts y .js
  testMatch: ['**/_test/**/*.test.ts'], // Asegúrate de que Jest encuentre tus archivos de test
  rootDir: '.', // Indica a Jest que use la raíz del proyecto como base
};

export default config;
