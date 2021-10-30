import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  isFirstChoosen: boolean = true;
  notificationTypes= ['Status', 'Friends', 'Groups'];

  constructor() { }

  toggleFirstChoosen(e) {
    this.isFirstChoosen = e;
  }

  ngOnInit() {}

}
