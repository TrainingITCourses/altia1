import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { SearchService } from './data/search.service';

@Component({
  templateUrl: './search.page.html',
  styles: [],
})
export class SearchPage {
  items$!: Observable<any[]>;

  constructor(private route: ActivatedRoute, private service: SearchService) {
    route.queryParams.subscribe({
      next: (queryParams) =>
        (this.items$ = service.getByQuery$(queryParams.term)),
    });

    this.items$ = route.queryParams.pipe(map((queryParams) => [9, 4, 'asd']));

    this.items$ = route.queryParams.pipe(
      map((queryParams) => queryParams.term),
      distinctUntilChanged(),
      switchMap((term) => service.getByQuery$(term))
    );
  }
}
