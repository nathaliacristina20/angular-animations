import { NotificationService } from './../notification.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  snackVisibility: string = 'hidden';
  public message: string | undefined;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifier.subscribe((message: string) => {
      this.message = message;
      this.snackVisibility = 'visible';
      timer(3000).subscribe(() => this.snackVisibility = 'hidden');
    })
  }

  onClick(){
    this.snackVisibility = this.snackVisibility === 'hidden' ? 'visible' : 'hidden';
  }

}
