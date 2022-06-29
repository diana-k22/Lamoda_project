const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data/products.json');
const path = require('path'); // импортируем path - это встроенная бибилиотека node.js 
const usersRouter  = require('../routes/users')
const fs = require('fs')

const app = express(); // Запускаем приложение

const PORT = 4001;

app.use(bodyParser.json())

// app.use('/users', usersRouter)

app.get('/products', (req, res) => {
    console.log(req.query)

      const pathJoin = path.join(__dirname, 'data', 'products.json')
        fs.readFile(pathJoin, {encoding: 'utf8'}, (err, data) => {
        
          if(err){
            console.log(err)
            return
          }
          res.writeHead(200, {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin':'*'
        })
        const products = data
        res.end(products)
      })
})



app.listen(PORT, () => {console.log('App started and listen port', PORT)});// вызовется, когда приложение запустится