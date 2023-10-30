module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"standard",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"eslint-config-prettier",
	],
	ignorePatterns: ["dist", "package-lock.json", ".eslintrc.cjs"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"no-unused-vars": "warn",
		"react/prop-types": "off",
	},
};
