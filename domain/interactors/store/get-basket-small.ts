import {IGetBasketSmall} from "../../boundaries/outputs/get-basket-small";
import {IBasketSmall} from "../../entites/store/models/basket-small";
import {ICartRepository} from "../../boundaries/inputs/cart.repository";

export class GetBasketSmall implements IGetBasketSmall {
    constructor(private readonly basketRepository: ICartRepository) {}

    public getBasketSmall(): IBasketSmall {
        return {
            price: this.basketRepository.getBasePrice(),
            count: this.basketRepository.getBasketItems().length
        }
    }
}