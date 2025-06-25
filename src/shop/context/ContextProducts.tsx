import { type ReactNode } from 'react';
import { createContextProduct, useReducerCar } from '../hooks/ManageReducerProducts';


export const ProviderContextProduct = ({ children }: { children: ReactNode }) => {
    const { products, Card, OriginalProduct, addProduct } = useReducerCar()
    const sendData = { products, Card, OriginalProduct, addProduct }

    return (
        <createContextProduct.Provider value={sendData}>
            {children}
        </createContextProduct.Provider>

    )


}