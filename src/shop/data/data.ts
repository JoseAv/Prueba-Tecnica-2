import type { Product } from "../types/products";

export const AccionDispatch = {
    AddProduct: 'Add_Product',
    ResProducts: 'Res_Product'
} as const



export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'iPhone 15 Pro',
        price: 999.99,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Latest iPhone with advanced camera',
        category: 'electronics',
        stock: 10
    },
    {
        id: '2',
        name: 'Samsung Galaxy S23 Ultra',
        price: 1199.99,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Powerful Android phone with S Pen',
        category: 'electronics',
        stock: 8
    },
    {
        id: '3',
        name: 'Cotton T-Shirt',
        price: 24.99,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Comfortable 100% cotton t-shirt',
        category: 'clothing',
        stock: 25
    },
    {
        id: '4',
        name: 'Wireless Headphones',
        price: 199.99,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Noise cancelling Bluetooth headphones',
        category: 'electronics',
        stock: 15
    },
    {
        id: '5',
        name: 'Ceramic Coffee Mug',
        price: 12.50,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Handcrafted ceramic mug, 12oz',
        category: 'home',
        stock: 30
    },
    {
        id: '6',
        name: 'Denim Jeans',
        price: 59.99,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Classic fit stretch denim jeans',
        category: 'clothing',
        stock: 18
    },
    {
        id: '7',
        name: 'Smart Watch',
        price: 249.99,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Fitness tracking and notifications',
        category: 'electronics',
        stock: 12
    },
    {
        id: '8',
        name: 'Throw Blanket',
        price: 39.99,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Soft fleece blanket, 50x60 inches',
        category: 'home',
        stock: 20
    },
    {
        id: '9',
        name: 'Leather Wallet',
        price: 45.00,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Genuine leather bifold wallet',
        category: 'clothing',
        stock: 14
    },
    {
        id: '10',
        name: 'Bluetooth Speaker',
        price: 89.99,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Portable waterproof speaker',
        category: 'electronics',
        stock: 9
    },
    {
        id: '11',
        name: 'Decorative Pillow',
        price: 29.95,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: '18x18 inch patterned pillow',
        category: 'home',
        stock: 22
    },
    {
        id: '12',
        name: 'Running Shoes',
        price: 79.99,
        image: 'https://ishop.gt/cdn/shop/files/IMG-10935306_92753b16-a6be-4790-8db8-ffa68a6cc4ae.jpg?v=1718923714&width=823',
        description: 'Lightweight cushioned running shoes',
        category: 'clothing',
        stock: 11
    }
];