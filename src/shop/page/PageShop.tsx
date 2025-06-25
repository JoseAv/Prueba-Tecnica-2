import { ShowProducts } from "../components/products/ShowProducts"
import '../style/page.css'
import '../../App.css'
import { Cart } from "../components/cart/Cart"
export const PageShop = () => {
    return (

        <>
            <div className="container-main">
                <h1 className="fade-in">Main Page</h1>
                <div className="container-content">
                    <div>
                        <ShowProducts />
                    </div>
                    <div>
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    )

}