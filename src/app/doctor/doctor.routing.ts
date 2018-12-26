import { Routes } from '@angular/router';
import { BasicInformationComponent } from './profile/basic-information/basic-information.component';
import { CliniciansProfileComponent } from './profile/clinicians-profile/clinicians-profile.component';
import { ChangeEmailComponent } from './settings/change-email/change-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const profileRoutes: Routes = [
  {
     path: 'profile',
      children: [{
        path: 'BasicInformation',
        component: BasicInformationComponent
      },
      {
        path: 'CliniciansProfile',
        component: CliniciansProfileComponent
      }]
    }, {
        path: 'settings',
        children: [
        {
          path: 'ChangeEmail',
          component: ChangeEmailComponent
        }]
    }, 
    {
      path: 'dashboard',
      component: DashboardComponent
    }
];
