import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { includeIgnoreFile } from '@eslint/compat';
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default withNuxt(
  includeIgnoreFile(gitignorePath),
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    files: ['*.ts', '*.js', '*.vue', 'eslint.config.mjs', 'ecosystem.config.cjs'],
    rules: {
      'require-await': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      '@stylistic/indent': 'off'
    }
  },
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          bracketSpacing: true,
          singleAttributePerLine: true,
          vueIndentScriptAndStyle: true,
          trailingComma: 'none',
          endOfLine: 'auto',
          jsxBracketSameLine: true,
          arrowParens: 'avoid',
          htmlWhitespaceSensitivity: 'ignore',
          printWidth: 120
        }
      ]
    }
  },
  {
    ignores: ['src/public/*', 'src/types/jitsi.d.ts', '**/vendor/**']
  }
)
  .override('nuxt/vue/rules', {
    rules: {
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-template-shadow': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }
      ]
    }
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  });
