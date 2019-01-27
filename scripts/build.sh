#!/usr/bin/env bash

echo """
  Building storybook Demo
"""
yarn build-storybook

echo """
  Build npm package
"""
yarn build-package

echo """
  Running tests, building coverage report
"""
yarn test
