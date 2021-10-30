import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed-time',
  templateUrl: './bed-time.component.html',
  styleUrls: ['./bed-time.component.scss'],
})
export class BedTimeComponent implements OnInit {
  isFirstChoosen: boolean = true;

  constructor() { }

  ngOnInit() {}

  setFirstChoosen(event) {
    this.isFirstChoosen = event;
  }
}
