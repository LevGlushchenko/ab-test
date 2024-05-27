// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      curly: ['error', 'all'],
      semi: ['error', 'never'],
      '@typescript-eslint/semi': ['off'],
      'no-unexpected-multiline': 'error',
      '@typescript-eslint/no-extra-semi': 'off',
      'require-await': 'error',
      'no-undef': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'prettier/prettier': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/naming-convention': ['warn', { selector: 'enum', format: ['PascalCase'] }],
      'vue/multi-word-component-names': 0,
      'rule-empty-line-before': 'off',
    },
  }
)
