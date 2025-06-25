import { AccionDispatch } from "../data/data"
import type { interfaceAction, interfaceState } from "../types/products"

export const ProductsReduce = (state: interfaceState, action: interfaceAction): interfaceState => {

    if (action.type === AccionDispatch.AddProduct) {
        const product = action.product
        if (!product) return state

        const findIndex = state.Card.findIndex((produ) => produ.id === product.id)
        if (findIndex === -1) {
            return {
                ...state,
                Card: [...state.Card, product]
            }
        }
        return state
    }


    return state

}