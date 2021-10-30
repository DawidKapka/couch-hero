import { Component, OnInit } from '@angular/core';
import {Challenge} from "../../shared/models/challenge.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-active-time',
  templateUrl: './active-time.component.html',
  styleUrls: ['./active-time.component.scss'],
})
export class ActiveTimeComponent implements OnInit {
  isFirstChoosen: boolean = true;
  myChallenges: Challenge[] = [
    {type: 'running', author: this.userService.getUser(), location: 'Lucerne', goal: '5km', completed: '3km', pointsGoal: 50, pointsCompleted: 30},
  ];
  friendsChallenges: Challenge[] = [
    {type: 'running', author: this.userService.getFriend(), location: 'Lucerne', goal: '10km', completed:'5km', pointsGoal: 100, pointsCompleted: 50},
  ]

  constructor(private userService: UserService) { }

  ngOnInit() {}

  toggleFirstChoosen(event) {
    this.isFirstChoosen = event;
  }
}
