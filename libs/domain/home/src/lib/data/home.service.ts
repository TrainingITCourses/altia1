import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCategories$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v2/categories';
    return this.http
      .get<unknown>(url)
      .pipe(map((results: any) => results.data));
  }
}
