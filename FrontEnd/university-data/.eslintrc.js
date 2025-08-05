module.exports = {
  ignorePatterns: ['dist'],
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      plugins: ['react-hooks', 'react-refresh'],
      rules: {
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
      extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
    },
  ],
};
