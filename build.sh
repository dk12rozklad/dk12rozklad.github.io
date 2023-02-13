#!/bin/bash
cd dev
npm run build
echo "
#########Build complete#########
"
git add .
git commit -m "build"
git push -u origin dev
echo "
#########Pushed to main branch#########
"