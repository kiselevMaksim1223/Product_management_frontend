module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react'], ['^antd'], ['^@?\\w'], ['@/(.*)'], ['^[./]']],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    // 'no-duplicate-imports': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
