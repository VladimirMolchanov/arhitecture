import { Component } from '@angular/core';
import {BasketSmallComponent} from "../../components/basket.small/basket.small.component";
import {ProductListComponent} from "../../components/product-list/product-list.component";

@Component({
  selector: 'app-product-list-view',
  standalone: true,
  imports: [
    BasketSmallComponent,
    ProductListComponent
  ],
  templateUrl: './product-list-view.component.html',
})
export class ProductListViewComponent {

}
