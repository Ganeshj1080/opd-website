import { trigger, state, animate, transition, style } from '@angular/animations';

export const openClose =
  trigger('openClose', [
    state('open', style({
      'max-height': '5000px', 'visibility': 'visible'
    })),
    state('closed', style({
      'max-height': '0px',  'visibility': 'hidden'
    })),
    transition('open => closed', [

      animate('600ms ease-in-out', style({
        'max-height': '0px'
      })),
      animate('700ms ease-in-out', style({
        'visibility': 'hidden'
      }))
    ]),
    transition('closed => open', [
      animate('1ms ease-in-out', style({
        'visibility': 'visible'
      })),
      animate('600ms ease-in-out', style({
        'max-height': '500px'
      }))
    ]),
  ])
