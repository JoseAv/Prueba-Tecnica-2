import { use } from "react"
import type { cardsProduct, Product } from "../../types/products"
import './product.css'
import { createContextProduct } from "../../hooks/ManageReducerProducts"

export const ShowProduct = ({ product, styleProductos = 'shop' }: { product: cardsProduct & Product, styleProductos: string }) => {
    const ContextoProduc = use(createContextProduct)
    if (!ContextoProduc) return <h1>No hay productos</h1>
    const { addProduct, resProduct } = ContextoProduc

    return (
        <div className={`${styleProductos} show-products`}>
            <p className="name">{product.name}</p>
            <p className="description">{product.description}</p>
            <p className="category"> {product.category}</p>
            <img src={product.image} alt="" />
            <p className="price">Precio: {product.price}</p>
            <p className="stock">{styleProductos === 'shop' ? `Stock` : `Total`} {product.total ?? product.stock}</p>
            {styleProductos === 'shop'
                ?
                <button onClick={() => addProduct(product)}>Add Car</button>
                :
                <>
                    <button onClick={() => addProduct(product)}>Agregar</button>
                    <button onClick={() => resProduct(product)}>Quitar</button>
                </>
            }

        </div>
    )


}