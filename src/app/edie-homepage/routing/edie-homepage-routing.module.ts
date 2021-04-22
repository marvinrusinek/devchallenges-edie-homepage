import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from '../containers/container/container.component';
import { MainComponent } from '../containers/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'container' },
  { path: 'container', component: ContainerComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdieHomepageRoutingModule { }
