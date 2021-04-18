const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', apiRouter);

app.listen(3000,() =>{
    console.log("Server Is Running");
})


