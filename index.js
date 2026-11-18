const express = require('express'); 
const app = express();  
const path = require('path'); 

app.use(express.static(path.join(__dirname, 'public'))); 

app.set('port', 3000);

app.listen(app.get('port'), () => { 
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
})        
