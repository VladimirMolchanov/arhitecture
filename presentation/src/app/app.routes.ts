import { Routes } from '@angular/router';
import {BasketComponent} from "./components/basket/basket.component";
import {AppComponent} from "./app.component";
import {BasketViewComponent} from "./views/basket-view/basket-view.component";
import {ProductListViewComponent} from "./views/product-list-view/product-list-view.component";

export const routes: Routes = [
  {
    path: '',
    component: ProductListViewComponent
  },
  {
    path: 'cart',
    component: BasketViewComponent
  }
];
