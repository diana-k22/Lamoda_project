const express = require('express');
const bodyParser = require('body-parser');
const data = require('./bin/data/products.json');
const path = require('path'); // импортируем path - это встроенная бибилиотека node.js 
const usersRouter  = require('./routes/users')
 const fs = require('fs')

const app = express(); // Запускаем приложение

const PORT = 4001;

// Мы ту говорим, бмблиотека path зарезолвь найди что-то по такому пути
// app.use - это мидлвейр, она берет запрос, который пришел на бэк встраивается между приходом запроса и обработчика и исполняет свой кусочек логики
// app.use(express.static(path.resolve(__dirname, 'build'))) //__dirname - отвечает за ссылку на текущую директорию

app.use(bodyParser.json())
// app.get('/', (req, res) => {
//     res.send('hi')
// })

// app.use('/users', usersRouter)


app.get('/', (req, res) => {
     res.status(200).send(data)
    // fs.readFile(path.resolve(__dirname, 'data', 'products.json')).then((json) => {
    //     res.send(JSON.parse(json))
    // })
    if(req.url === '/') {
        const pathJoin = path.join(__dirname, 'data', 'product.json')
        fs.readFile(pathJoin, {encoding: 'utf8'}, (err, data) => {
          if(err){
            console.log(err)
            return
          }
          res.writeHead(200, {
           'Content-type': 'text/html'
        })
        const products = JSON.parse(data)
        res.end(products)
      })}
})




app.listen(PORT, () => {console.log('App started and listen port', PORT)});// вызовется, когда приложение запустится