module.exports = {
  env: {
    es6: true,
    node: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    tsconfigRootDir: '.',
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      forOf: true,
      spread: true,
      modules: true,
      classes: true,
      generators: true,
      restParams: true,
      regexUFlag: true,
      regexYFlag: true,
      globalReturn: true,
      destructuring: true,
      impliedStrict: true,
      blockBindings: true,
      defaultParams: true,
      octalLiterals: true,
      arrowFunctions: true,
      binaryLiterals: true,
      templateStrings: true,
      superInFunctions: true,
      unicodeCodePointEscapes: true,
      objectLiteralShorthandMethods: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandProperties: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message:
              'Use either Record<PropertyKey, unknown> or { [K: string]: unknown }',
            fixWith: 'Record<PropertyKey, unknown>',
          },
          object: {
            message:
              'Use either Record<PropertyKey, unknown> or { [K: string]: unknown }',
            fixWith: 'Record<PropertyKey, unknown>',
          },
          'string[]': {
            message: 'Use Array<string>',
            fixWith: 'Array<string>',
          },
          'number[]': {
            message: 'Use Array<number>',
            fixWith: 'Array<number>',
          },
          'boolean[]': {
            message: 'Use Array<boolean>',
            fixWith: 'Array<boolean>',
          },
          'any[]': {
            message: 'Use Array<any>',
            fixWith: 'Array<any>',
          },
        },
      },
    ],
    quotes: ['error', 'single'],
    'no-fallthrough': 'off',
    'block-scoped-var': 'error',
    'brace-style': [2, '1tbs'],
    'eol-last': [2, 'always'],
    eqeqeq: ['error', 'smart'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off',
    'no-unused-vars': 'error',
    'no-extra-parens': 'error',
    'no-await-in-loop': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-void': 'off',
    'prefer-const': 'off',
    indent: 'off',
    yoda: 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'warn',
    'no-regex-spaces': 'warn',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    complexity: 'off',
    camelcase: 'error',
    'default-case': 'warn',
    'guard-for-in': 'off',
    'max-depth': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'new-cap': 'off',
    'no-alert': 'error',
    'no-empty-character-class': 'error',
    'no-new': 'off',
    'no-empty': 'error',
    'no-array-constructor': 'off',
    'no-bitwise': 'off',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-class-assign': 'warn',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'warn',
    'no-iterator': 'off',
    'no-label-var': 'error',
    'no-labels': 'off',
    'no-lone-blocks': 'off',
    'no-lonely-if': 'error',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'warn',
    'no-multi-str': 'error',
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'off',
    'no-new-func': 'warn',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'warn',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'off',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-script-url': 'off',
    'no-self-assign': 'error',
    'no-self-compare': 'warn',
    'no-setter-return': 'warn',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-sync': 'off',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'off',
    'no-undef': 'off',
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'off',
    'no-unneeded-ternary': 'off',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'off',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
  },
}
