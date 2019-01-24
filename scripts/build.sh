#!/usr/bin/env bash

./node_modules/.bin/build-storybook -- --dry-run -c .storybook

mv storybook-static dist
