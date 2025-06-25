import './App.css'
import { ShowProducts } from './shop/components/products/ShowProducts'
import { ProviderContextProduct } from './shop/context/ContextProducts'

function App() {

  return (
    <>
      <ProviderContextProduct>
        <ShowProducts />
      </ProviderContextProduct>
    </>
  )
}

export default App
