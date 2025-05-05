import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Enforce React hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // Prevent accessibility issues
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      
      // TypeScript best practices
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      
      // Naming conventions
      '@typescript-eslint/naming-convention': [
        'warn',
        // PascalCase for components, classes, and interfaces
        {
          selector: 'typeLike',
          format: ['PascalCase']
        },
        // camelCase for variables and functions
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow'
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow'
        }
      ]
    }
  }
];

export default eslintConfig;
