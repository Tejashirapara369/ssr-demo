import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { of } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<any> {
  constructor(private productService: ProductService) {}
  resolve(route: ActivatedRouteSnapshot) {
    const product = this.productService.getProductInfo(
      route.params['productId']
    );
    return of(product);
  }
}
