module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react-hooks'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // 检查 Hook 的规则
        'react-hooks/rules-of-hooks': 'error',
        // 检查 effect 的依赖
        'react-hooks/exhaustive-deps': 'warn',
        // React 17 需关闭以下规则（开启自动 @babel/preset-react automatic）
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        indent: ['error', 4],
    },
};
