import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  isFirstChoosen: boolean = true;
  challenges = [
    {title: 'Running'},
    {title: 'Workouts'},
    {title: 'Gap fillers'},
    {title: 'Psychology'},
    {title: 'Rehabillitation'},
  ];
  favorites = [
    {title: 'Running', choices: ['Jogging', 'Walking', 'Sprint']},
    {title: 'Workouts', choices: ['30 Min', '60 Min']},
    {title: 'Gapfillers', choices: ['5 Min']}
  ];

  constructor() { }

  ngOnInit() {}

  toggleFirstChoosen(event) {
    this.isFirstChoosen = event;
  }

}
