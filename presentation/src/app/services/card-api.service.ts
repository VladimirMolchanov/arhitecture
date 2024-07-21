import {Injectable} from "@angular/core";
import {CartApi} from "../../../../data/store/cartApi";

@Injectable({
  providedIn: "root"
})
export class CardApiService extends CartApi {}
