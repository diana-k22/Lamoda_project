const express = require('express');
const bodyParser = require('body-parser');
const getProductsFilter = require('../routes/productsRoutes')
const getProductsId = require('../routes/productsRoutes')


const app = express(); 

const PORT = 4001;

app.use(bodyParser.json())

app.use(getProductsFilter)

app.use(getProductsId)

app.listen(PORT, () => {console.log('App started and listen port', PORT)});