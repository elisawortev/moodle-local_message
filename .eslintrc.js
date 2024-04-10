module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
    ],
    globals: {
        define: true,
        Y: true
    },
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
        "linebreak-style": ["error", "windows"]
    }
  }