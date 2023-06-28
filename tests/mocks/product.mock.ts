const validCreateProductBody = {
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "orderId": 4
}

const validatedCreatedProductBody = {
    "id": 6,
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "orderId": 4
}

export const productsList = 
  [
    {
      id: 1,
      name: "Excalibur",
      price: "10 peças de ouro",
      orderId: 1
    }
  ]

export default {
    validCreateProductBody,
    validatedCreatedProductBody,
    productsList,
}