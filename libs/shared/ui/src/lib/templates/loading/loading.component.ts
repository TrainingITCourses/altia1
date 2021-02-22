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
  @Input() props!: Observable<unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() dataArrive = new EventEmitter<any>();
  loading = true;
  errorMessage = '';
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.props = this.props.pipe(
      tap({
        next: (data) => {
          this.loading = false;
          this.dataArrive.next(data);
        },
        error: (err) => {
          this.cdr.markForCheck();
          this.loading = false;
          this.errorMessage = err.message;
        },
      })
    );
  }
}
