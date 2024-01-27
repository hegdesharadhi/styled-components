import React from 'react'
import Title from './ComplexTitle'
import Product from './Product'

const products = [
  {
    id: 1,
    name: 'chair',
    price: 30,
  },
  {
    id: 2,
    name: 'couch',
    price: 150,
  },
  {
    id: 3,
    name: 'bed',
    price: 550,
  },
]
const Products = () => {
  return (
    <section>
      <Title title="All products" />
      {products.map((product) => {
        return <Product {...product} key={product.id} />
      })}
    </section>
  )
}

export default Products
