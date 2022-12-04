import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToProduct() {
    if (this.product.productName) {
      const proId = this.product.productName.toLowerCase().split(' ').join('-');
      this.router.navigate([proId]);
    }
  }
}
