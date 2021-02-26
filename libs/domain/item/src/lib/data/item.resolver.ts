import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root',
})
export class ItemResolver implements Resolve<Item> {
  constructor(private service: ItemService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Item> {
    const id = route.params.id;
    return this.service.getItemById$(id);
  }
}
