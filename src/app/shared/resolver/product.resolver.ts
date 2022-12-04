import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { of } from 'rxjs';
import { MetaService } from '../services/meta.service';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<any> {
  constructor(
    private productService: ProductService,
    private meta: MetaService
  ) {}
  resolve(route: ActivatedRouteSnapshot) {
    console.log('route', route)
    const product = this.productService.getProductInfo(
      route.params['productId']
    );
    this.meta.updateMeta(
      product?.productName,
      product?.description,
      product?.imgUrl,
      route.params['productId']
    );
    return of(product);
  }
}
