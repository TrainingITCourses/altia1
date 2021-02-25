import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './item.page.html',
  styles: [],
})
export class ItemPage {
  item = this.route.snapshot.data.item;

  constructor(private route: ActivatedRoute) {}
}
