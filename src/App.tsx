import { useEffect, useState } from 'react'
import './App.css'

type Product = {
  id: number
  name: string
  price: number
  category: string
}

function App() {
  const [products, setProducts] = useState<Product[]>([])
  console.log(products);


  useEffect(() => {
    fetch('http://localhost:3001/api/products').then((response) => {
      return response.json()
    })
    .then((products) => {
      setProducts(products)
    })
  }, [])

  return (
    <>
    <ul>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
          </div>
      ))}
    </ul>
    </>
  )
}

export default App
