import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from 'libs/shared/ui/src/lib/models/card';
import { Category } from '../../models/Category';

@Component({
  selector: 'ab-home-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() props: Category[] = [];
  toCard(category: Category): Card {
    const card = {
      title: category.name,
      description: category.description || '',
      footer: '',
    };
    return card;
  }
}
