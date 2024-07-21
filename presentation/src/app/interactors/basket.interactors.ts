import {inject, InjectionToken, Provider} from "@angular/core";
import {AddProductCartUseCase} from "../../../../domain/interactors/store/addProductCart.useCase";
import {CardApiService} from "../services/card-api.service";
import {RemoveProductFromCartUseCase} from "../../../../domain/interactors/store/removeProductFromCart.useCase";
import {GetBasketSmall} from "../../../../domain/interactors/store/get-basket-small";
import {IGetBasketSmall} from "../../../../domain/boundaries/outputs/get-basket-small";
import {IGetBasketItems} from "../../../../domain/boundaries/outputs/get-basket-items";
import {GetBasketItemsUseCase} from "../../../../domain/interactors/store/get-basket-items.useCase";

export const ADD_BASKET_INTERACTOR = new InjectionToken<AddProductCartUseCase>('addProductCartUseCase');
export const REMOVE_BASKET_INTERACTOR = new InjectionToken<RemoveProductFromCartUseCase>('removeProductFromCartUseCase');
export const GET_BASKET_INTERACTOR = new InjectionToken<IGetBasketItems>('getBasketItems');
export const GET_BASKET_SMALL_INTERACTOR = new InjectionToken<IGetBasketSmall>('getBasketSmall');

export const BASKET_INTERACTORS_PROVIDE: Provider[] = [
  {
    provide: ADD_BASKET_INTERACTOR,
    useFactory: () => {
      return new AddProductCartUseCase(inject(CardApiService))
    }
  },
  {
    provide: REMOVE_BASKET_INTERACTOR,
    useFactory: () => {
      return new RemoveProductFromCartUseCase(inject(CardApiService))
    }
  },
  {
    provide: GET_BASKET_SMALL_INTERACTOR,
    useFactory: () => {
      return new GetBasketSmall(inject(CardApiService))
    }
  },
  {
    provide: GET_BASKET_INTERACTOR,
    useFactory: () => {
      return new GetBasketItemsUseCase(inject(CardApiService))
    }
  }
]
