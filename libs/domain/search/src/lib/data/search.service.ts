import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getByQuery$(searchTerm: string) {
    const term = searchTerm.toLocaleLowerCase();
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/items';
    return this.http.get<any>(url).pipe(
      map((results) => results.data),
      map((data) => data.filter((i: any) => this.byTerm(i, term)))
    );
  }

  byTerm(item: any, searchTerm: string) {
    if (item.name.toLocaleLowerCase().includes(searchTerm)) return true;
    if (item.description?.toLocaleLowerCase().includes(searchTerm)) return true;
    return false;
  }
}
