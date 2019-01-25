#!/usr/bin/env bash

echo """

  Building storybook Demo

"""
# yarn dry-run

echo """

  Build importable library

"""
NODE_ENV='production' \
./node_modules/.bin/webpack \
-o ./dist/index.js \
--config ./config/webpack.config.js \
--env.production


echo """

  Running tests, building coverage report

"""
# yarn test
