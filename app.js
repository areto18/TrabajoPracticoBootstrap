const express = require('express');
const path = require('path');

const app = express();

/**Ejemplo para ver
 * const publicPath = path.resolve(__dirname. './public');
 * app.use( express.static(publicPath) );
 */
/**bootstrap */
app.use("/css",express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))

app.use("/js",express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))
/**bootstrap  */

app.use(express.static(path.join(__dirname, '/public'))); //setear la carpeta de archivos publicos


app.listen(3004, function () {
    console.log("Servidor corriendo");
});


 app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
 })