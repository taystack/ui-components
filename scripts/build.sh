#!/usr/bin/env bash

echo """

  Make sure you commit your changes and push develop!!!

"""

git checkout master &&\
echo -ne ':wq\n' | git pull origin develop &&\
yarn dry-run
rm -rf .storybook config images src stories
mv storybook-static docs
git add . &&\
git commit -m "Deploying github pages" &&\
git push origin master &&\
git checkout develop &&\
rm -rf storybook-static
