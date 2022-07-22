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


const checkResponse = (res) => {
    console.log('chekResStart')
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then((data) => {
        throw new Error(data.message[0].messages[0].message);
      })
  }


export const authorization = (email, password) => {
    console.log('start')
    return fetch('http://localhost:4001/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      .then(checkResponse)
  }