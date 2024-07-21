import {ICartRepository} from "../../boundaries/inputs/cart.repository";
import {IGetBasketItems} from "../../boundaries/outputs/get-basket-items";

export class GetBasketItemsUseCase implements IGetBasketItems {
    constructor(private readonly basketRepository: ICartRepository) {}

    public getBasketItems(){
        return this.basketRepository.getBasketItems()
    }
}