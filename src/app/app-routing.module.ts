import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:import-spacing
import {AboutAsbestosComponent} from './about-asbestos/about-asbestos.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {EstimatorComponent} from './estimator/estimator.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'about_asbestos', component: AboutAsbestosComponent},
  {path: 'estimator', component: EstimatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
