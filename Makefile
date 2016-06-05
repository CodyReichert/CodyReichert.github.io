
.PHONY: deploy
deploy: build
	git subtree push --prefix dist/ origin master

.PHONY: build
build:
	npm run build
