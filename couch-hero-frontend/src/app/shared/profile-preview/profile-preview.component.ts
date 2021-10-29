import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss'],
})
export class ProfilePreviewComponent implements OnInit {
  username: string = '';
  points: number = 0;

  constructor(private userService: UserService) {
    this.username = userService.getUsername();
    this.points = userService.getPoints();
  }

  ngOnInit() {}

}
