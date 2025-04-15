// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CountryService {

//   constructor() { }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  getCountryByCode(code: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/alpha/${code}`);
  }
}

