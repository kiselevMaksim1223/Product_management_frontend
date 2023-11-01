import { useSelector } from 'react-redux'
import './App.css'
import { RootStateType } from './store/createStore'
import { useAppDispatch } from './common/hooks/useAppDispatch'
import { getProducts } from './store/reducers/ProductsSlice/slice'
import { useEffect } from 'react'

function App() {
  const products = useSelector((state: RootStateType) => state.products.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts())
  })

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
