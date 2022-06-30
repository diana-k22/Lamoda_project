const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data/products.json');
const path = require('path'); // импортируем path - это встроенная бибилиотека node.js 
const fs = require('fs')
// const userRouter = require('./../routes/users')
// const productRouter = require('./../routes/products')

const app = express(); // Запускаем приложение

const PORT = 4001;

app.use(bodyParser.json())

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

      let products = JSON.parse(data)
  
      if(req.query.filter){
        products = products.filter((product) => product.category === req.query.filter)
      }
      res.end(JSON.stringify(products))
    })
})

app.get('/products/:id', (req, res) => {
console.log(req.params)
    const pathJoin = path.join(__dirname, 'data', 'products.json')

    fs.readFile(pathJoin, {encoding: 'utf8'}, (err, data) => {
    
    if(err){
      console.log(err)
      return
    }

    const products = JSON.parse(data)
    let product = null

    if(req.params.id){
      product = products.find((p) => p.id === parseInt(req.params.id))
    }
    
    if(product) {
      res.writeHead(200, {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
      res.end(JSON.stringify(product))
    }else {
      res.writeHead(404, {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
      res.end(JSON.stringify({ message: 'product not found'}))
    }

  })
})

   



app.listen(PORT, () => {console.log('App started and listen port', PORT)});// вызовется, когда приложение запустится