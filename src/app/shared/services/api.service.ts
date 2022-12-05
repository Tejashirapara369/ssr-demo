import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type DropdownOption = {
  label: string;
  value: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  searchCountry(key: string): Observable<DropdownOption[]> {
    return this.http.get(`https://restcountries.com/v3.1/name/${key}`).pipe(
      map((arr: any) => {
        return arr.map((obj: any) => ({
          label: obj?.name?.common,
          value: obj?.flag,
        }));
      })
    );
  }
}
