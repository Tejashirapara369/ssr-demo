import { Injectable } from '@angular/core';
import { PRODUCT_LIST } from 'src/assets/data/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productList = PRODUCT_LIST;

  constructor() {}

  getProductInfo(proId: string): any {
    const product = this.productList.find(
      (item) => item.productName.toLowerCase().split(' ').join('-') === proId
    );

    return product;
  }
}
