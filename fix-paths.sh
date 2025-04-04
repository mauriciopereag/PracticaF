#!/bin/bash

# Navegar al directorio dist
cd dist

# Crear archivo .nojekyll
touch .nojekyll

# Reemplazar rutas absolutas con relativas en index.html
sed -i '' 's|src="/PracticaF/|src="./|g' index.html
sed -i '' 's|href="/PracticaF/|href="./|g' index.html

echo "Rutas corregidas en index.html" 