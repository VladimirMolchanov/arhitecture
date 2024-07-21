import {Product} from "../../entites/store/models/product";

export interface IGetProducts {
    getAllProducts() : Promise<Product[]>;
}