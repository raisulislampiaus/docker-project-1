const express = require('express');
const bp      = require('body-parser');
const signup = require('./controllers/signup');
const login = require('./controllers/login');
const app     = express();

app.use(bp.json());

app.use(signup);
app.use(login);


const __port = process.env.PORT || 5000;
app.listen(__port,()=>{
    console.log(`application port:${__port}`)
});