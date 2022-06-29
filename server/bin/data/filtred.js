import { products } from "./products"

const productJson = require('./products.json')

const getProductById = (productId) => {
    return products.find((product) => product.id.toString() === productId) //Возвращает продукт из массива удовлетворяющий условие 
}

const categoryFilter = (category) => {
    return products.filter((product) => product.category === category) // Фильтрует категории(Например: если категория женщины === женщины, тогда рендерит товар)
}

export {
    getProductById,
    categoryFilter,
}

// Перенести папку в сервер, по пути /api/product/'productId' возвращать json с данными из объекта выше(почитать про promise http )

