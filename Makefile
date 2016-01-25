install:
	@npm --registry=http://registry.npm.taobao.org install
	@if [ ! -f "$$(which webpack)" ]; then sudo npm --registry=http://registry.npm.taobao.org install webpack -g; fi

deploy: install
	@npm run deploy

dev: install
	@npm run dev