import {Product} from "../../entites/store/models/product";
import {IProductRepository} from "../../repositoty/store/product.repository";

export class GetProductsUseCase {
    constructor(private readonly productsRepository: IProductRepository) {}

    public getAllProducts() {
        return this.productsRepository.getAll()
    }
}