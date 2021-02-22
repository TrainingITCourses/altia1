import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CategoriesComponent } from './ui/categories/categories.component';
import { FeaturedComponent } from './ui/featured/featured.component';
import { ViewModeComponent } from './ui/view-mode/view-mode.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePage },
    ]),
    UiModule,
  ],
  declarations: [HomePage, CategoriesComponent, FeaturedComponent, ViewModeComponent],
})
export class HomeModule {}
