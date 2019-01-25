#!/usr/bin/env bash

echo """

  Ensure we are on 'master'

"""
git checkout master
# branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
# echo $branch == 'master' ? "yep" : "nope"
# if [[$branch != 'master']] ; then
#   echo """
#
#   Can only deploy from 'master'
#
#   """;
#   git branch
#   exit 0;
# else
# fi

# echo """
#   Removing src/, stories/
# """
# rm -rf src stories


echo """

  Deploying GitHub page

"""
git add . &&\
git commit -m "Deploying github pages" &&\
git push origin master

yarn publish-coverage
