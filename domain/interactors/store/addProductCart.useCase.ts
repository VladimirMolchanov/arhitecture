import {ProductCart} from "../../entites/store/models/cart";
import {ICartRepository} from "../../boundaries/inputs/cart.repository";

export class AddProductCartUseCase {
    constructor(private readonly cartRepository: ICartRepository) {}

    public addProduct(product: ProductCart) {
        this.cartRepository.addToCart(product)
    }
}