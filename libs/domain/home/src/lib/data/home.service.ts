import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ApiArray } from '../models/ApiArray';
import { Category } from '../models/Category';
import { Item } from '../models/Item';
import { viewModes } from '../models/viewModes';

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor(private http: HttpClient) {}
  getCategories$(viewMode: viewModes) {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    return this.http.get<ApiArray<Category>>(url).pipe(
      map((results) => results.data),
      map((data) => this.mapCategoryResults(data, viewMode)),
      tap((value) => console.log(value))
    );
  }
  getFeatured$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/items';
    return this.http.get<ApiArray<Item>>(url).pipe(
      map((results) => results.data),
      map((data) => this.mapGetTop(data, 3))
    );
  }

  private mapCategoryResults(categories: Category[], viewMode: viewModes) {
    return categories.sort((a, b) => {
      if (viewMode === viewModes.sortAddedDate) {
        return 0;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }
  private mapGetTop(items: Item[], top: number) {
    return items.slice(0, top);
  }
}
