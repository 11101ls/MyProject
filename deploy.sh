#!/user/bin/env sh

#发生错误时终止
set -e

# 构建
yarn build

# 进入文件夹
cd dist

git init

git add -A

git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<11101ls>/<MyProject>.git master:gh-pages

cd -

