import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [@stretch]="buttonState" (click)="onClick()">Animation Button</button>`,
  styleUrls: ['./button.component.css'],
  animations: [
    trigger('stretch', [
      state('normal', style({ width: '120px' })),
      state('stretched', style({ width: '180px' })),
      transition('normal => stretched', animate('300ms')),
      transition('stretched => normal', animate('500ms')),
    ])
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  buttonState = 'normal';

  ngOnInit(): void {
  }

  onClick(){
    if (this.buttonState === "normal"){
      this.buttonState = 'stretched';
    } else {
      this.buttonState = 'normal';
    }
  }

}
