import {inject, InjectionToken, Provider} from "@angular/core";
import {GetProductsUseCase} from "../../../../domain/interactors/store/getProducts.useCase";
import {ProductApiService} from "../services/product-api.service";
import {GetProductUseCase} from "../../../../domain/interactors/store/getProduct.useCase";
import {IGetProduct} from "../../../../domain/boundaries/outputs/get-product";

export const GET_PRODUCTS_INTERACTOR = new InjectionToken<GetProductsUseCase>('getProductsUseCase');
export const GET_PRODUCT_INTERACTOR = new InjectionToken<IGetProduct>('getProduct');

export const PRODUCT_INTERACTOR_PROVIDES: Provider[] = [
  {
    provide: GET_PRODUCTS_INTERACTOR,
    useFactory: () => {
      return new GetProductsUseCase(inject(ProductApiService))
    }
  },
  {
    provide: GET_PRODUCT_INTERACTOR,
    useFactory: () => {
      return new GetProductUseCase(inject(ProductApiService))
    }
  }
]
