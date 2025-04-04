#!/usr/bin/env sh

# abortar en caso de errores
set -e

# construir
npm run build

# navegar al directorio de salida de compilación
cd dist

# colocar .nojekyll para evitar el procesamiento Jekyll
touch .nojekyll

# si estás desplegando en un dominio personalizado
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# si estás desplegando en https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# si estás desplegando en https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mauricioperea/PracticaF.git main:gh-pages

cd - 