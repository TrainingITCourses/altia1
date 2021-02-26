import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'ab-term',
  templateUrl: './term.component.html',
  styles: [],
})
export class TermComponent {
  termControl!: FormControl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.termControl = this.fb.control('');
    this.route.queryParams
      .pipe(filter((queryParams) => queryParams !== this.termControl.value))
      .subscribe({
        next: (queryParams) =>
          this.termControl.patchValue(queryParams.term || ''),
      });

    this.termControl.valueChanges
      .pipe(
        debounceTime(300),
        filter((searchTerm) => searchTerm.lenght > 2)
      )
      .subscribe({
        next: (searchTerm) =>
          router.navigate(['search'], {
            queryParams: { term: searchTerm },
            queryParamsHandling: 'merge',
          }),
      });
  }
}
