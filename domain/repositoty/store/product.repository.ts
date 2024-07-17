import {Product} from "../../entites/store/models/product";

export interface IProductRepository {
    getAll(): Promise<Product[]>;
    getById(id: Product['id']): Promise<Product>;
}