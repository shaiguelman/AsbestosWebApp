import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:import-spacing
import {AboutAsbestosComponent} from './about-asbestos/about-asbestos.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'about-asbestos', component: AboutAsbestosComponent},
  {path: 'estimator',
    loadChildren: './estimator/estimator.module#EstimatorModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
