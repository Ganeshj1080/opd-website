import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';

import { profileRoutes } from './doctor.routing';
import { BasicInformationComponent } from './profile/basic-information/basic-information.component';
import { CliniciansProfileComponent } from './profile/clinicians-profile/clinicians-profile.component';
import { ChangeEmailComponent } from './settings/change-email/change-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    NgbModule
  ],
  declarations: [BasicInformationComponent, CliniciansProfileComponent, ChangeEmailComponent, DashboardComponent]
})
export class DoctorModule { }
