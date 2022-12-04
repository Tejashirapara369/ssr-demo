import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_LIST } from 'src/assets/data/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  readonly productList = PRODUCT_LIST;

  constructor() {}

  ngOnInit(): void {}
}
