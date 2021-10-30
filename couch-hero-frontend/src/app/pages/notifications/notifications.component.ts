import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  friend: User;
  isFirstChoosen: boolean = true;
  notificationTypes= ['Status', 'Friends', 'Groups'];

  constructor(private userService: UserService) {
    this.friend = userService.getFriend();
  }

  toggleFirstChoosen(e) {
    this.isFirstChoosen = e;
  }

  ngOnInit() {}

}
