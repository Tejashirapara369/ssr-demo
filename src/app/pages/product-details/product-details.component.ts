import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/shared/services/meta.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;

  constructor(private route: ActivatedRoute, private meta: MetaService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.productDetails = data['product'];
      
    });
  }
}
