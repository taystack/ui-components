#!/usr/bin/env bash

echo """

  Make sure you commit your changes and push develop!!!

  Moving to 'master' and building storybook

"""

git checkout master &&\
echo -ne ':wq\n' | git pull origin develop &&\
yarn dry-run

echo """

  Running tests, building coverage report

"""
yarn test
