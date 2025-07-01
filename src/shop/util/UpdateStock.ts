import type { Product } from "../types/products"

export const UpdateStock = (products: Product[], product: Product, acction: string) => {
    return products.map((ele) => {
        if (ele.id === product.id && acction === 'res') {

            if (ele.stock <= 0)
                return ele

            ele.stock -= 1
            return ele
        }
        if (ele.id === product.id && acction === 'sum') {
            ele.stock += 1
            return ele
        }

        return ele
    })
}