import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { EdieHomepageComponent } from './edie-homepage.component';
import { ContainerComponent } from './edie-homepage/containers/container/container.component';
import { MainComponent } from './edie-homepage/containers/main/main.component';
import { LazyImgDirective } from './edie-homepage/containers/main/lazy-img.directive';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'edie-homepage',
    pathMatch: 'full'
  },
  {
    path: 'edie-homepage',
    loadChildren: () =>
      import('./edie-homepage/routing/edie-homepage-routing.module').then(m => m.EdieHomepageRoutingModule)
  }
];

@NgModule({
  declarations: [
    EdieHomepageComponent,
    ContainerComponent,
    MainComponent,
    LazyImgDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [EdieHomepageComponent]
})
export class EdieHomepageModule { }
