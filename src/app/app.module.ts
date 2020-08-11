import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutAsbestosComponent } from './about-asbestos/about-asbestos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EstimatorComponent } from './estimator/estimator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { RemovalItemFormComponent } from './estimator/removal-item-form/removal-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutAsbestosComponent,
    WelcomeComponent,
    EstimatorComponent,
    RemovalItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
