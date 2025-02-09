import {Product} from "../../entites/store/models/product";
import {IProductRepository} from "../../boundaries/inputs/product.repository";
import {IGetProducts} from "../../boundaries/outputs/get-products";

export class GetProductsUseCase implements IGetProducts {
    constructor(private readonly productsRepository: IProductRepository) {}

    public getAllProducts() {
        return this.productsRepository.getAll()
    }
}