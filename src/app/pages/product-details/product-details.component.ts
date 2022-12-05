import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
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
  ];

  countryOption$!: Observable<{ label: string; value: string }[]>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.productDetails = data['product'];
    });

    this.form
      .get('country')
      ?.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        console.log('value', value)
        this.countryOption$ = this.apiService.searchCountry(value).pipe(tap(v => console.log('v', v)));
      });
  }

  onSubmit() {
    console.log('this.form.value', this.form);
  }
}
