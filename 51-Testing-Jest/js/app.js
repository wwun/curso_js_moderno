//se crea el package json usando npm init
//npm i --save-dev jest para qe se guarde como dependencia de desarrollo e instala jest y crea la carpeta node_modules y package-lock json qe es el qe guarda las dependecias
//se modifica package json "scripts": { "test": "jest"}, para qe se ejecute el binario de jest, este binario se encuentra en node_modules - .bin
//se crea una carpeta __tests__ para agregar los tests
//npm test, npm run test, npm t sirven para ejecutar los tests, eso ejecuta el script de package.json y eso ejecuta las pruebas de jest
//si no se qiere crear una carpeta y se qiere agregar en otra carpeta como donde esta app.js, la prueba debe renombrarse a nombredeprueba.test.js
//para usar babel se debe crear una carpeta .babelrc, 
    //instalar babel npm i --save-dev @babel/preset-env y npm i jest-environment-jsdom
    //agregar en babelrc {"presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]}
    //agregar en package json para qe qede asi: "scripts": {"test": "jest"},"jest": {"testEnvironment": "jsdom"},"author": "William Wun", se agrega la parte de "jest":{"testEnvirtonment"}
    //para ejecutar las pruebas con snapshot actualizados se usa npm test t -- -u

import App from './classes/App.js';

const app = new App();