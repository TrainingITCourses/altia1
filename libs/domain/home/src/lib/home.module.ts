import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CategoriesComponent } from './ui/categories/categories.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePage },
    ]),
    UiModule,
  ],
  declarations: [HomePage, CategoriesComponent],
})
export class HomeModule {}
