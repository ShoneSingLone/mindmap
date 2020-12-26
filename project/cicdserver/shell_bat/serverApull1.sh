cd ../remotedemo
pwd
ls -la
git branch
git checkout main
git pull
node --version
npm -v
npm i
npm run build
pwd
tar -czvf remotedemo.tar.gz dist
mv ./remotedemo.tar.gz ../cicdserver/statics/dists
ls -la ../cicdserver/statics/dists
