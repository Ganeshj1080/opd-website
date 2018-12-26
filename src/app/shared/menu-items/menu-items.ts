import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'profile',
    name: 'Profile',
    type: 'sub',
    icon: 'basic-lock-open',
    children: [
          {
            state: 'BasicInformation',
            name: 'Basic Info'
            }, {
              state: 'CliniciansProfile',
              name: "Clinician's Profile"
            }
        ]
  },
  {
    state: 'settings',
    name: 'Settings',
    type: 'sub',
    icon: 'basic-lock-open',
    children: [
      {
        state: 'ChangeEmail',
        name: 'Change Email'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

}
