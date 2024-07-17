import {ProductCart} from "../../entites/store/models/cart";

export interface ICartRepository {
    addProduct(productId: ProductCart): void;
    removeProduct(id: ProductCart['productId']): void;
}