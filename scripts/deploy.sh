#!/usr/bin/env bash

echo """
  Removing images/, src/, stories/
"""
rm -rf images src stories

echo """
  Moving storybook-static/ to docs/
"""
rm -rf docs
mv storybook-static docs

echo """

  Deploying GitHub page

"""
git add . &&\
git commit -m "Deploying github pages" &&\
git push origin master &&\
git checkout develop &&\
rm -rf storybook-static
