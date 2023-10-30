module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: ['standard', 'eslint:recommended', 'eslint-config-prettier'],
	ignorePatterns: ['.eslintrc.js', 'package-lock.json', 'README.md'],
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
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-unused-vars': 'warn',
	},
};
