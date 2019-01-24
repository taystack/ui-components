#!/usr/bin/env bash

echo """

  Make sure you commit your changes and push develop!!!

"""

git checkout master &&\
echo -ne '\n' | git pull origin develop &&\
./node_modules/.bin/build-storybook -- --dry-run -c .storybook
rm -rf .storybook config images src stories
git add . &&\
git commit -m "Deploying github pages" &&\
git push origin master &&\
git checkout develop &&\
rm -rf storybook-static
