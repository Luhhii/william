const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.port
//servir un contenido estatico
app.use(express.static(`Public`));
app.get('/', function (req, res) {
  res.send('Home Page')
});
app.get('/holamundo', function (req, res) {
    res.send('Hello World')
  });
app.get('*',  (req, res)=> {
    res.sendFile(__dirname+'/404.html')
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })