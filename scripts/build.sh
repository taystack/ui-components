#!/usr/bin/env bash

git checkout master && \
git pull origin develop &&\
./node_modules/.bin/build-storybook -- --dry-run -c .storybook

mv storybook-static docs
