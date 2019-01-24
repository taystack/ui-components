#!/usr/bin/env bash

echo """

  Make sure you commit your changes and push develop!!!

"""

git checkout master &&\
echo -ne ':wq\n' | git pull origin develop &&\
yarn dry-run
