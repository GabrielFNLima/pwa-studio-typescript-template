const config = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        '@magento'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'no-prototype-builtins': 'off',
        'no-undef': 'off',
        'no-useless-escape': 'off',
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            parser: 'babel-eslint',
            rules: {
            }
        },
        {
            files: ['*.ts', '*.tsx'],
            rules: {
            }
        }
    ]
};

module.exports = config;
