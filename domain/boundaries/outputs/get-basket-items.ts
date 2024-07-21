import {ProductCart} from "../../entites/store/models/cart";

export interface IGetBasketItems {
    getBasketItems(): ProductCart[]
}