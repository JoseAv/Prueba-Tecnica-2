import type { Product } from "../types/products"

export const ShowProduct = ({ product }: { product: Product }) => {

    return (
        <>
            <h3>{product.name}</h3>
            <h4>{product.description}</h4>
            <p>{product.category}</p>
            <img src={product.image} alt="" />
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <button>Add Car</button>

        </>
    )


}