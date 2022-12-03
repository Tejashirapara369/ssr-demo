import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_LIST } from 'src/assets/data/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  readonly productList = PRODUCT_LIST;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToProduct({ productName }: { productName: string }) {
    if (productName) {
      const proId = productName.toLowerCase().split(' ').join('-');
      this.router.navigate([proId]);
    }
  }
}
