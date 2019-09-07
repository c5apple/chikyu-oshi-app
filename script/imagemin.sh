#!/bin/bash

ls -l "src/assets/img/$1"
cp "src/assets/img/$1" ../imagemin-tool/src/.
cd ../imagemin-tool/
node index.js 200; git clean -f
mv "dist/$1" ../chikyu-oshi-app/src/assets/img/.
cd ../chikyu-oshi-app/
ls -l "src/assets/img/$1"
