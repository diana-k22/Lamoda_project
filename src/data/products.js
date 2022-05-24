export const CATEGORY = {
    woman: 'woman',
    man: 'man',
    children: 'children'
}

export const products = [
    {
      itemGallery: "http://picsum.photos/id/535/150/200",
      price: '6.999',
      title: 'T-shirt',
      category: CATEGORY.woman,
      productCategory: 'clothes',
      key: 0,
      details: {
        compound:'Состав бла бла'
      }
    }, {
      itemGallery: "http://picsum.photos/id/1025/150/200",
      price: '6.999',
      title: 'Coat',
      category: CATEGORY.man,
      productCategory: 'clothes',
      key: 1,
      details: {
        price: '99$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/177/150/200",
      price: '6.99',
      title: 'Shorts',
      category: CATEGORY.children,
      productCategory: 'clothes',
      key: 2,
      details: {
        price: '100$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/103/150/200",
      price: '7.000',
      title: 'Boots',
      category: CATEGORY.man,
      productCategory: 'boots',
      key: 3,
      details: {
        price: '100500$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/31/150/200",
      price: '6.999',
      title: 'Socks',
      category: CATEGORY.woman,
      productCategory: 'clothes',
      key: 4,
      details: {
        price: '9$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/22/150/200",
      price: '7.999',
      title: 'Trousers',
      category: CATEGORY.man,
      productCategory: 'clothes',
      key: 5,
      details: {
        price: '1$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/319/150/200",
      price: '8.999',
      title: 'Jacket',
      category: CATEGORY.man,
      productCategory: 'clothes',
      key: 6,
      details: {
        price: '90$'
      }

    }, {
      itemGallery: "http://picsum.photos/id/349/150/200",
      price: '9.999',
      title: 'Shirt',
      category: CATEGORY.children,
      productCategory: 'clothes',
      key: 7,
      details: {
        price: '74$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/449/150/200",
      price: '6.999',
      title: 'Bra',
      category: CATEGORY.woman,
      productCategory: 'accessories',
      key: 8,
      details: {
        price: '200$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/338/150/200",
      price: '7.999',
      title: 'Hoodie',
      category: CATEGORY.man,
      productCategory: 'clothes',
      key: 9,
      details: {
        price: '699$'
      }
    }, {
      itemGallery: "https://picsum.photos/id/325/150/200",
      price: '8.999',
      title: 'Dress',
      category: CATEGORY.woman,
      productCategory: 'clothes',
      key: 10,
      details: {
        price: '9900$'
      }

    }, {
      itemGallery: "http://picsum.photos/id/281/150/200",
      price: '9.999',
      title: 'Jeans',
      category: CATEGORY.man,
      productCategory: 'clothes',
      key: 11,
      details: {
        price: '9569$'
      }
    }
  ]
 
  
const getProductById = (productId) => {
    return products.find((product) => product.key.toString() === productId) //Возвращает продукт из массива удовлетворяющий условие 
}

const categoryFilter = (category) => {
    return products.filter((product) => product.category === category) // Фильтрует категории(Например: если категория женщины === женщины, тогда рендерит товар)
}

export {
    getProductById,
    categoryFilter,
}

