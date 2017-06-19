#!/bin/bash
git subtree split --prefix packages/scalescss -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
