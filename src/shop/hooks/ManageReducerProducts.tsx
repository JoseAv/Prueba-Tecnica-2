import { createContext, useReducer } from "react";
import { PRODUCTS } from "../data/data";
import type { interfaceState } from "../types/products";

export const createContextProduct = createContext<interfaceState | null>(null);

export const useReducerCar = (): interfaceState => {
    const [state] = useReducer(useReducerCar, { products: PRODUCTS, Card: PRODUCTS, OriginalProduct: PRODUCTS })


    return { products: state.products, Card: state.Card, OriginalProduct: state.OriginalProduct }
}