const  fs  = require('fs')
const path = require('path');


const getProductsFilter = (req, res) => {
    const pathJoin = path.join(__dirname, '../bin/data', 'products.json')
    fs.readFile(pathJoin, {encoding: 'utf8'}, (err, data) => {
      if(err){
        console.log(err)
        return err
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
}


const getProductsId = (req, res) => {
    const pathJoin = path.join(__dirname, '../bin/data', 'products.json')
    fs.readFile(pathJoin, {encoding: 'utf8'}, (err, data) => {
    
    if(err){
      console.log(err)
      return err
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
}

module.exports = {
    getProductsFilter,
    getProductsId
}