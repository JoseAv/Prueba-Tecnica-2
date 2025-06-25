import { use } from "react"
import { createContextProduct } from "../../hooks/ManageReducerProducts"

export const Cart = () => {
    const sendData = use(createContextProduct)
    if (!sendData) return <h1>No hay datos Cargados</h1>

    const { Card } = sendData


    return (
        <div>
            <h1>Carrito de Comprar</h1>
            <div>
                {Card.map((ele) => {
                    return <h1>{ele.image}</h1>
                })}

            </div>
        </div>


    )

}