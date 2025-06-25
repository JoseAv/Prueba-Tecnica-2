import type { Product } from "../../types/products"
import './product.css'

export const ShowProduct = ({ product, styleProductos = 'shop' }: { product: Product, styleProductos: string }) => {

    return (
        <div className={styleProductos}>
            <p className="name">{product.name}</p>
            <p className="description">{product.description}</p>
            <p className="category">{product.category}</p>
            <img src={product.image} alt="" />
            <p className="price">{product.price}</p>
            <p className="stock">{product.stock}</p>
            <button>Add Car</button>

        </div>
    )


}