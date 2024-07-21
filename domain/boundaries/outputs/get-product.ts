import {Product} from "../../entites/store/models/product";

export interface IGetProduct {
    getProduct(id: Product['id']): Promise<Product | undefined>;
}