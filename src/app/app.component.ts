import { NotificationService } from './notification.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public show = false;

  constructor(private notificationService: NotificationService){

  }

  testando(){
    this.show = !this.show;
  }

  snackbar(){
    this.notificationService.notify('Ola!!!!!');
  }

}

