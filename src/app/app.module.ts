import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { ReportedConsultantsComponent } from './reported-consultants/reported-consultants.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    PropertyDetailsComponent,
    LogInComponent,
    NavBarComponent,
    FooterComponent,
    ProfileComponent,
    ConsultantsComponent,
    ReportedConsultantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
