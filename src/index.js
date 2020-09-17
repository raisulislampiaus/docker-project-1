const express = require('express');
const bp      = require('body-parser');
const signup = require('./controllers/signup');
const app     = express();

app.use(bp.json());

app.use(signup);


const __port = process.env.PORT || 5000;
app.listen(__port,()=>{
    console.log(`application port:${__port}`)
});