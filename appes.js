const http = require('http');
const { listenerCount } = require('process');
http.createServer((req,res)=>{
    res.write("hola yajaira roblesota");
    res.end();

})
.listen(8080);
console.log(`Escuchando el puerto`,8080)