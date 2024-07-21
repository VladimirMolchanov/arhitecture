import {ICartRepository} from "../../domain/boundaries/inputs/cart.repository";
import {ProductCart} from "../../domain/entites/store/models/cart";

export class CartApi implements ICartRepository {
    private collection: ProductCart[] = []

    public addToCart(product: ProductCart) {
        const findProduct= this.collection.find((item) => {
            return item.productId === product.productId
        })

        if(!findProduct) {
            this.collection.push(product);
            return
        }

        this.collection = this.collection.map((item) => {
            if(item.productId === product.productId) {
                return {
                    ...item,
                    amount: item.amount + product.amount
                }
            }

            return {...item}
        })
    }

    public removeFromCart(productId: ProductCart['productId']) {
        this.collection = this.collection.filter((product) => productId !== product.productId);
    }

    public getBasketItems() {
        return [...this.collection]
    }

    public getBasePrice() {
        return this.collection
            .map(({price, amount}) => price * amount)
            .reduce((acc, item) => acc + item, 0)
    }
}