import { use } from "react"
import { createContextProduct } from "../../hooks/ManageReducerProducts"
import { ShowProduct } from "../products/Produc"
import './cart.css'

export const Cart = () => {
    const sendData = use(createContextProduct)
    if (!sendData) return <h1>No hay datos Cargados</h1>
    const { Card } = sendData


    return (
        <div className="container-car">
            {Card.map((product) => {
                return <div key={product.id}>
                    <ShowProduct product={product} styleProductos={"shop"} />
                </div>
            })}

        </div>
    )

}