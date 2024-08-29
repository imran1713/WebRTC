const express = require('express');

const app = express();


function demoSendResponse(req, res){
    res.send('Hola amigo?');
}

app.use('/', demoSendResponse);

app.listen(3000, () => {
    console.log('server listening to the port');
});