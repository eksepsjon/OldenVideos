module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next',
    'plugin:css/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['css', '@typescript-eslint', 'react'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-explicit-any': 'warning',
    'react/require-default-props': [
      'off',
      {
        functions: 'defaultArguments',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'max-len': 'off',
    indent: 'off',
    quotes: 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-indent': [
      1,
      2,
      {
        checkAttributes: false,
        indentLogicalExpressions: false,
      },
    ],
    'react/jsx-indent-props': [1, 2],
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['Field'],
        depth: 3,
      },
    ],
  },
};
