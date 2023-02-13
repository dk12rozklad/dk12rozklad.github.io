#!/bin/bash
npm run build
echo "
#########Build complete#########
"
git add .
git commit -m "build"
git push -u origin main
echo "
#########Pushed to main branch#########
"