import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {PRODUCT_INTERACTOR_PROVIDES} from "./interactors/product.interactors";
import {BASKET_INTERACTORS_PROVIDE} from "./interactors/basket.interactors";

export const appConfig: ApplicationConfig = {
  providers: [
    PRODUCT_INTERACTOR_PROVIDES,
    BASKET_INTERACTORS_PROVIDE,
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
