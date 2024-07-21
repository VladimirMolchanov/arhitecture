import {Injectable} from "@angular/core";
import {ProductFakeApi} from "../../../../data/store/productFakeApi";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends ProductFakeApi {}
