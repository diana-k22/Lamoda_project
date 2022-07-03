const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('../routes/productsRoutes')


const app = express(); 

const PORT = 4001;

app.use(bodyParser.json())

app.use(productsRouter) // Заходит в роутер и выполняет все роуты по порядку

app.listen(PORT, () => {console.log('App started and listen port', PORT)});