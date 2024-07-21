import {ICartRepository} from "../../boundaries/inputs/cart.repository";
import {ProductCart} from "../../entites/store/models/cart";

export class RemoveProductFromCartUseCase {
    constructor(private readonly cartRepository: ICartRepository) {}

    public removeProduct(product: ProductCart['productId']) {
        this.cartRepository.removeFromCart(product)
    }
}