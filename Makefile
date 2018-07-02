SERVER_DIR = app/server
SERVER_DIST = $(SERVER_DIR)/dist
CLIENT_DIR = app/client
CLIENT_DIST = $(CLIENT_DIR)/dist

CLIENT_DIST = app/client/dist
TSC = $(BIN)/tsc
TSC_CONFIG = tsconfig.json
TSLINT = $(BIN)/tslint
TS_SRC = $(shell find Server -type f -name "*.ts")

.PHONY: test-server
test-server:
	cd app/server && npm run test

.PHONY: build-server-dev
build-server-dev:
	rm -rf $(SERVER_DIST)/*
	cd app/server && npm install && npm run webpack

.PHONY: clean-server
clean-server:
	rm -rf $(SERVER_DIST)/*

.PHONY: run-fullstack
run-server-dev:
	docker-compose up

