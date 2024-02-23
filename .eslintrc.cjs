module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],

  // 指定 react 的版本
  // https://github.com/jsx-eslint/eslint-plugin-react#configuration
  settings: {
    react: {
      version: 'detect'
    }
  },

  // 自定义规则
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
