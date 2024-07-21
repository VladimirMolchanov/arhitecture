import {ProductCart} from "../../entites/store/models/cart";

export interface ICartRepository {
    addToCart(productId: ProductCart): void;
    removeFromCart(id: ProductCart['productId']): void;
    getBasketItems(): ProductCart[];
    getBasePrice(): number
}