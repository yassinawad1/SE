import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { ReportedConsultantsComponent } from './reported-consultants/reported-consultants.component';

const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'property-details/:id', component: PropertyDetailsComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'consultants', component: ConsultantsComponent},
  {path: 'reported-consultants', component: ReportedConsultantsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

