import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {GetProductsUseCase} from "../../../../../domain/interactors/store/getProducts.useCase";
import {GET_PRODUCTS_INTERACTOR} from "../../interactors/product.interactors";
import {Product} from "../../../../../domain/entites/store/models/product";
import {CommonModule} from "@angular/common";
import {ADD_BASKET_INTERACTOR} from "../../interactors/basket.interactors";
import {AddProductCartUseCase} from "../../../../../domain/interactors/store/addProductCart.useCase";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = []

  constructor(
    @Inject(GET_PRODUCTS_INTERACTOR) private readonly getProductsUseCase: GetProductsUseCase,
    @Inject(ADD_BASKET_INTERACTOR) private readonly addItemToBasket: AddProductCartUseCase
  ) {}


  public ngOnInit() {
    this.getProductsUseCase.getAllProducts().then((data) => {
      this.products = data
    })
  }

  public handleAddProduct(id: Product["id"], price: number) {
    this.addItemToBasket.addProduct({
      productId: id, amount: 1, price: price
    })
  }
}
