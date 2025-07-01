import type { Product } from "../types/products"

export const UpdateStock = (products: Product[], product: Product) => {
    return products.map((ele) => {
        if (ele.id === product.id) {
            ele.stock -= 1
            return ele
        }
        return ele
    })
}