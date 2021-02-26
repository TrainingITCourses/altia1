import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiObject } from '../models/ApiObject';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItemById$(id: string) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/items/${id}`;
    return this.http
      .get<ApiObject<Item>>(url)
      .pipe(map((results) => results.data));
  }
}
