import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './templates/loading/loading.component';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent, TitleComponent, CardComponent],
  exports: [LoadingComponent, TitleComponent, CardComponent]
})
export class UiModule {}
