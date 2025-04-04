#!/bin/bash
js_file=$(find . -name "index-*.js" -print | sed 's|^./assets/||')
css_file=$(find . -name "index-*.css" -print | sed 's|^./assets/||')
cat > index.html << EOL
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contacto - Seminuevos de Lujo</title>
    <link rel="stylesheet" href="./assets/${css_file}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/${js_file}"></script>
  </body>
</html>
EOL
