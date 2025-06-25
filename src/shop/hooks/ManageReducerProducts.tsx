import { createContext, useReducer } from "react";
import { AccionDispatch, PRODUCTS } from "../data/data";
import type { Product, reduceUse } from "../types/products";
import { ProductsReduce } from "../context/ProductsReduce";

export const createContextProduct = createContext<reduceUse | null>(null);

export const useReducerCar = (): reduceUse => {
    const [state, dispatch] = useReducer(ProductsReduce, { products: PRODUCTS, Card: [], OriginalProduct: PRODUCTS })

    const addProduct = (product: Product) => dispatch({ type: AccionDispatch.AddProduct, product })



    return { products: state.products, Card: state.Card, OriginalProduct: state.OriginalProduct, addProduct }
}