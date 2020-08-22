import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EstimatorComponent} from './estimator.component';
import {RemovalItemFormComponent} from './removal-item-form/removal-item-form.component';
import {ResultsComponent} from './results/results.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [EstimatorComponent,
    RemovalItemFormComponent,
    ResultsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EstimatorModule { }
