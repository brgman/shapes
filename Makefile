build:
	npm install
	npm run build
	npx login
	npm publish --access public
	npm deprecate @brgman/shapes@1.0.1 "This version is deprecated, please use a newer version."