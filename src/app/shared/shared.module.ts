import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [ AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective, ToggleFullscreenDirective, HomePageComponent ],
  exports:      [ AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective, ToggleFullscreenDirective, HomePageComponent ],
  imports: [RouterModule, CommonModule],
  providers: 	[ MenuItems ]
})
export class SharedModule { }
