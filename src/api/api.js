export const getProductById = (productId) => {
    return fetch('http://localhost:4001/products/'+ productId)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                return json
            })
  }

export const filterCategory = (category) => {
    return fetch(`http://localhost:4001/products?filter=${category}`)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                return json
            })
}