export interface Cart {
    products: ProductCart[]
}

export interface ProductCart {
    productId: string;
    amount: number;
    price: number;
}