import {Product} from "../../entites/store/models/product";
import {IProductRepository} from "../../boundaries/inputs/product.repository";
import {IGetProducts} from "../../boundaries/outputs/get-products";
import {IGetProduct} from "../../boundaries/outputs/get-product";

export class GetProductUseCase implements IGetProduct {
    constructor(private readonly productsRepository: IProductRepository) {}

    public getProduct(id: Product['id']) {
        return this.productsRepository.getById(id)
    }
}