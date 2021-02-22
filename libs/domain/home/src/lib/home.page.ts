import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './data/home.service';

@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  categories$: Observable<unknown> = this.service.getCategories$();
  categories: unknown;
  // loading = false;
  // errorMessage = '';

  constructor(private service: HomeService, private cdr: ChangeDetectorRef) {
    // this.loading = true;
    // this.categories$ = this.service.getCategories$().pipe(
    //   tap({
    //     next: () => (this.loading = false),
    //     error: (err) => {
    //       console.log('ENTRA');
    //       this.cdr.markForCheck();
    //       this.loading = false;
    //       this.errorMessage = err.message;
    //     },
    //     complete: () => console.log('COMPLETE'),
    //   })
    // );
  }
}
