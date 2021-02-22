import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ab-ui-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  @Input() props$!: Observable<unknown>;
  @Output() dataArrive = new EventEmitter<unknown>();
  loading = true;
  errorMessage = '';
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.props$ = this.props$.pipe(
      tap({
        next: (data) => {
          console.log('DATA');
          this.loading = false;
          this.dataArrive.next(data);
        },
        error: (err) => {
          console.log('ERROR');
          this.cdr.markForCheck();
          this.loading = false;
          this.errorMessage = err.message;
        },
        complete: () => console.log('COMPLETE'),
      })
    );
  }
}
