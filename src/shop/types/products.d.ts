export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: 'electronics' | 'clothing' | 'books' | 'home';
    stock: number;
}


export interface interfaceState {
    products: Product[],
    Card: Product[] | []
    OriginalProduct: Product[]
}

export interface interfaceAction {
    type: string,
}