#!/usr/bin/env bash

set -e
set -o pipefail
set -v

initialGitHash=$(git rev-list --max-parents=0 HEAD)
node ./studio-build.js $initialGitHash &

curl -s -X POST https://vitaliy-stackbit.ngrok.io/project/5dff4cf7ad170ce78c62c019/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://vitaliy-stackbit.ngrok.io/pull/5dff4cf7ad170ce78c62c019
curl -s -X POST https://vitaliy-stackbit.ngrok.io/project/5dff4cf7ad170ce78c62c019/webhook/build/ssgbuild > /dev/null
jekyll build
wait

curl -s -X POST https://vitaliy-stackbit.ngrok.io/project/5dff4cf7ad170ce78c62c019/webhook/build/publish > /dev/null
echo "Stackbit-build.sh finished build"
