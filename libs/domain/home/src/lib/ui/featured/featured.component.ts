import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from 'libs/shared/ui/src/lib/models/card';
import { Item } from '../../models/Item';

@Component({
  selector: 'ab-home-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent {
  @Input() props: Item[] = [];
  toCard(item: Item): Card {
    const card = {
      title: item.name,
      description: item.description || '',
      footer: '',
      link: '../item/' + item.id,
    };
    return card;
  }
}
