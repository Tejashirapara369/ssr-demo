import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/shared/services/meta.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  form: FormGroup = new FormGroup({
    name: new FormControl(null),
    city: new FormControl({ value: '03', disabled: false }),
    state: new FormControl('AS'),
    country: new FormControl(null),
  });

  cityOptions = [
    { label: 'Surat', value: '05' },
    { label: 'Ahmedabad', value: '01' },
    { label: 'Rajkot', value: '03' },
  ];
  
  stateOption = [
    { label: 'Gujarat', value: 'GJ' },
    { label: 'Asam', value: 'AS' },
    { label: 'Uttar-pradesh', value: 'UP' },
    { label: 'Rajasthan', value: 'RJ' },
    { label: 'Delhi', value: 'DL' },
    { label: 'Kashmir', value: 'KS' },
    { label: 'Karnatak', value: 'KK' },
    { label: 'Madhya-pradesh', value: 'MP' },
    { label: 'Bihar', value: 'BH' },
    { label: 'Maharastra', value: 'MH' },

  ]

  constructor(private route: ActivatedRoute, private meta: MetaService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.productDetails = data['product'];
    });

    // setTimeout(() => {
    //   this.form.get('name')?.disable();
    // }, 50000);
  }

  onSubmit() {
    console.log('this.form.value', this.form);
  }
}
