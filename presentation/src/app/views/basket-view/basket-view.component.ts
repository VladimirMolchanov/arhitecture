import { Component } from '@angular/core';
import {BasketComponent} from "../../components/basket/basket.component";

@Component({
  selector: 'app-basket-view',
  standalone: true,
  imports: [BasketComponent],
  templateUrl: './basket-view.component.html',
})
export class BasketViewComponent {

}
