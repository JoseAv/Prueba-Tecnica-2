import { use } from "react"
import { createContextProduct } from "../../hooks/ManageReducerProducts"
import type { Product } from "../../types/products"
import { ShowProduct } from "./produc"


export const ShowProducts = () => {
    const sendData = use(createContextProduct)
    if (!sendData) return <h1>No hay datos Cargados</h1>

    const { products } = sendData

    return <>
        <h1>Tienda de Productos</h1>

        {products.map((product: Product) => {
            return <div key={product.id}>
                <ShowProduct product={product} />
            </div>
        })}

    </>

}