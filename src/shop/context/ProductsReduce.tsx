import { AccionDispatch } from "../data/data"
import type { interfaceAction, interfaceState } from "../types/products"
import { UpdateStock } from "../util/UpdateStock"

export const ProductsReduce = (state: interfaceState, action: interfaceAction): interfaceState => {

    if (action.type === AccionDispatch.AddProduct) {
        const product = action.product
        if (!product) return state
        if (product.stock <= 0) return state

        const findIndex = state.Card.findIndex((produ) => produ.id === product.id)
        const updateStock = UpdateStock(state.products, product, 'res')

        if (findIndex === -1) {
            return {
                ...state,
                products: updateStock,
                Card: [...state.Card, { ...product, cant: 1, total: product.price }]
            }
        }

        const newCard = [...state.Card]
        newCard[findIndex].cant += 1
        newCard[findIndex].total = newCard[findIndex].price * newCard[findIndex].cant
        newCard[findIndex].stock -= 1
        return {
            ...state,
            products: updateStock,
            Card: [...newCard]
        }
    }

    if (action.type === AccionDispatch.ResProducts) {
        const product = action.product
        if (!product) return state

        const findIndex = state.Card.findIndex((produ) => produ.id === product.id)
        const newCard = [...state.Card]
        const updateStock = UpdateStock(state.products, product, 'sum')

        newCard[findIndex].cant -= 1
        newCard[findIndex].stock += 1
        if (newCard[findIndex].cant <= 0) {
            newCard.splice(findIndex, 1)
            return {
                ...state,
                products: updateStock,
                Card: newCard
            }
        }

        newCard[findIndex].total = newCard[findIndex].price * newCard[findIndex].cant
        return {
            ...state,
            products: updateStock,
            Card: [...newCard]
        }
    }




    return state

}