
.PHONY: deploy
deploy:
	git subtree push --prefix dist/ origin master
