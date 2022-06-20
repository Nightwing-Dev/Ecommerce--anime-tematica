export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    stock: number;
    qty: number;
}

export interface Usuarios{
    nombre: string;
    email: string;
    password: string;
}