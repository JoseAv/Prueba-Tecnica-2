import './App.css'
import { ProviderContextProduct } from './shop/context/ContextProducts'
import { PageShop } from './shop/page/PageShop'

function App() {

  return (
    <>
      <ProviderContextProduct>
        <PageShop />
      </ProviderContextProduct>
    </>
  )
}

export default App
