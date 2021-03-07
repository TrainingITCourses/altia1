import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@ab/home').then((module) => module.HomeModule),
        },
        {
          path: 'item',
          loadChildren: () =>
            import('@ab/item').then((module) => module.ItemModule),
        },
        {
          path: 'search',
          loadChildren: () =>
            import('@ab/search').then((module) => module.SearchModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
