#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
# cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:dysonring/dysonring.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:dysonring/vue-ui-polkadot.git master:gh-pages
cp -rf docs/.vuepress/dist/ .
git add -A
git commit -m 'commit build'
git push git@github.com:dysonring/dysonring.github.io.git master
cd -