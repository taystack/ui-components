#!/usr/bin/env bash

echo """
  Removing old ./dist
"""

rm -rf ./dist

echo """
  Building package
"""

NODE_ENV='production' \
./node_modules/.bin/babel ./src \
-d ./dist \
--ignore "./src/tests/**/*.*"

echo """
  Done building package
"""
