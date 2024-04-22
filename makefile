.PHONY: check-publish get-latest publish

repo_name ?= "blueshift-ui"

# Prompt the user for approval to publish all upated packages to our package registry
check-publish:
	@echo "This is a no-op if run without versioning first (yarn bump). Have you updated the package versions appropriately? [y/N] " && read ans && [ $${ans:-N} = y ]

get-latest:
	@git fetch --tags -f
	@git checkout master
	@git pull

# Publish all upated packages to our package registry
# Works together with the `publish` workflow in .github/workflows
publish: get-latest check-publish
	DATE=$$(date +"%F-%H_%M_%S") && \
	git tag -a release-packages-$$DATE -m "release of $$DATE for all updated packages" && \
	git push origin release-packages-$$DATE
