import { use } from "react"
import type { Product } from "../../types/products"
import './product.css'
import { createContextProduct } from "../../hooks/ManageReducerProducts"

export const ShowProduct = ({ product, styleProductos = 'shop' }: { product: Product, styleProductos: string }) => {
    const ContextoProduc = use(createContextProduct)
    if (!ContextoProduc) return <h1>No hay productos</h1>
    const { addProduct } = ContextoProduc

    return (
        <div className={styleProductos}>
            <p className="name">{product.name}</p>
            <p className="description">{product.description}</p>
            <p className="category">{product.category}</p>
            <img src={product.image} alt="" />
            <p className="price">{product.price}</p>
            <p className="stock">{product.stock}</p>
            <button onClick={() => addProduct(product)}>Add Car</button>

        </div>
    )


}