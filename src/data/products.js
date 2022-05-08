export const products = [
    {
      itemGallery: "http://picsum.photos/id/535/150/200",
      subtitle: '6.999',
      title: 'T-shirt',
      key: 0,
      details: {
        price: '0.1$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/1025/150/200",
      subtitle: '6.999',
      title: 'Coat',
      key: 1,
      details: {
        price: '99$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/177/150/200",
      subtitle: '6.99',
      title: 'Shorts',
      key: 2,
      details: {
        price: '100$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/103/150/200",
      subtitle: '7.000',
      title: 'Boots',
      key: 3,
      details: {
        price: '100500$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/31/150/200",
      subtitle: '6.999',
      title: 'Socks',
      key: 4,
      details: {
        price: '9$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/22/150/200",
      subtitle: '7.999',
      title: 'Trousers',
      key: 5,
      details: {
        price: '1$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/319/150/200",
      subtitle: '8.999',
      title: 'Jacket',
      key: 6,
      details: {
        price: '90$'
      }

    }, {
      itemGallery: "http://picsum.photos/id/349/150/200",
      subtitle: '9.999',
      title: 'Shirt',
      key: 7,
      details: {
        price: '74$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/449/150/200",
      subtitle: '6.999',
      title: 'Bra',
      key: 8,
      details: {
        price: '200$'
      }
    }, {
      itemGallery: "http://picsum.photos/id/338/150/200",
      subtitle: '7.999',
      title: 'Hoodie',
      key: 9,
      details: {
        price: '699$'
      }
    }, {
      itemGallery: "https://picsum.photos/id/325/150/200",
      subtitle: '8.999',
      title: 'Dress',
      key: 10,
      details: {
        price: '9900$'
      }

    }, {
      itemGallery: "http://picsum.photos/id/281/150/200",
      subtitle: '9.999',
      title: 'Jeans',
      key: 11,
      details: {
        price: '9569$'
      }
    }
  ]
export const productData = [


]
const getProductById = (productId) => {
    return products.find((product) => product.key.toString() === productId) //Возвращает продукт из массива удовлетворяющий условие 
}

export {getProductById}