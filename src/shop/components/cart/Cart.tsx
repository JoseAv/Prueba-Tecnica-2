import { use } from "react"
import { createContextProduct } from "../../hooks/ManageReducerProducts"
import { ShowProduct } from "../products/Produc"

export const Cart = () => {
    const sendData = use(createContextProduct)
    if (!sendData) return <h1>No hay datos Cargados</h1>
    console.log(sendData)
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