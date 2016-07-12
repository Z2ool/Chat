Chat & socket

Instalace

    git clone https://github.com/Z2ool/Chat

    npm install

Spuštení aplikace

    node app.js

Zdrojové kody jsou ve složce /src překládají se do složky public/js/
překlad přes babel

    babel --presets react --watch src/js/ --out-dir public/js/

Po spuštění aplikace se zobrazi login obrazovka, po zadaní jména dojde k přihlášení a může se chatovat. Sledují se nové zprávy
a přihlášení uživatelé, měla by být aktivovaná session když se uživatel vrátí zpět.