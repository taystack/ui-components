#!/usr/bin/env bash

echo """

  Make sure you commit your changes and push develop!!!

"""

git checkout master && \
git pull origin develop &&\
./node_modules/.bin/build-storybook -- --dry-run -c .storybook &&\
rm -rf .storybook config images scripts src stories
git push origin master &&\
git checkout develop
