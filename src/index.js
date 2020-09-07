const express = require('express');
const bp      = require('body-parser');

const app     = express();


const __port = process.env.PORT || 5000;
app.listen(__port,()=>{
    console.log(`application port:${__port}`)
});