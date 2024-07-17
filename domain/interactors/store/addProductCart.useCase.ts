import {ProductCart} from "../../entites/store/models/cart";
import {ICartRepository} from "../../repositoty/store/cart.repository";

export class AddProductCartUseCase {
    constructor(private readonly cartRepository: ICartRepository) {}

    public addProduct(product: ProductCart) {
        this.cartRepository.addProduct(product)
    }
}