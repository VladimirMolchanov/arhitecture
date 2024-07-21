import {Component, DoCheck, Inject, OnInit} from '@angular/core';
import {GET_BASKET_SMALL_INTERACTOR} from "../../interactors/basket.interactors";
import {IGetBasketSmall} from "../../../../../domain/boundaries/outputs/get-basket-small";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-basket-small',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './basket.small.component.html',
})
export class BasketSmallComponent implements OnInit, DoCheck {
  public count = 0;
  public price: number = 0

  constructor(@Inject(GET_BASKET_SMALL_INTERACTOR) private readonly getBasketSmallService: IGetBasketSmall) {
  }

  public ngOnInit(): void {
    const {price, count} =this.getBasketSmallService.getBasketSmall()

    this.count = count;
    this.price = price
  }

  public ngDoCheck() {
    const {price, count} =this.getBasketSmallService.getBasketSmall()

    this.count = count;
    this.price = price
  }
}
