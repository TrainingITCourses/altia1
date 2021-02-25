import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemResolver } from './data/item.resolver';
import { ItemPage } from './item.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        pathMatch: 'full',
        component: ItemPage,
        resolve: {
          item: ItemResolver,
        },
      },
    ]),
  ],
  declarations: [ItemPage],
})
export class ItemModule {}
