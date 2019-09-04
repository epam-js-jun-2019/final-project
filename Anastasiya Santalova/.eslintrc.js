module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:compat/recommended",
    "plugin:sonarjs/recommended",
    "plugin:promise/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    "react",
    "compat",
    "sonarjs",
    "no-loops",
    "promise"
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "block-scoped-var": "warn",
    "default-case": "warn",
    "no-loops/no-loops": 2,
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn"
  }
}
