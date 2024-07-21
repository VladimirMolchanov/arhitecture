import {Component, Inject, OnInit} from '@angular/core';
import {GET_BASKET_INTERACTOR, REMOVE_BASKET_INTERACTOR} from "../../interactors/basket.interactors";
import {GetBasketItemsUseCase} from "../../../../../domain/interactors/store/get-basket-items.useCase";
import {ProductCart} from "../../../../../domain/entites/store/models/cart";
import {RemoveProductFromCartUseCase} from "../../../../../domain/interactors/store/removeProductFromCart.useCase";
import {GET_PRODUCT_INTERACTOR} from "../../interactors/product.interactors";
import {IGetProduct} from "../../../../../domain/boundaries/outputs/get-product";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [],
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit{
  public items: (ProductCart & {name?: string})[] = []

  constructor(@Inject(GET_BASKET_INTERACTOR) private readonly getBasketService: GetBasketItemsUseCase,
              @Inject(REMOVE_BASKET_INTERACTOR) private readonly removeBasketService: RemoveProductFromCartUseCase,
              @Inject(GET_PRODUCT_INTERACTOR) private readonly getProductService: IGetProduct) {
  }

  public ngOnInit(): void {
    this.items = this.getBasketService.getBasketItems()

    this.items.forEach((item, index) => {
      this.getNameProduct(item.productId).then((product) => {
        if(product) {
          this.items[index].name = product.name
        }
      })
    })
  }

  public deleteItem(id: ProductCart['productId']) {
    this.removeBasketService.removeProduct(id)
    this.items = this.getBasketService.getBasketItems()

    console.log(this.getBasketService.getBasketItems())
    console.log(this.items)
  }

  public getNameProduct(id: ProductCart['productId']) {
    return this.getProductService.getProduct(id)
  }
}
