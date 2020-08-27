import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:import-spacing
import {EstimatorCalculatorComponent} from './estimator-calculator/estimator-calculator.component';
import {ResultsComponent} from './results/results.component';
import {EstimatorComponent} from './estimator.component';

const routes: Routes = [
  { path: '', component: EstimatorComponent, children: [
      { path: '', component: EstimatorCalculatorComponent},
      { path: 'results', component: ResultsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatorRoutingModule { }
