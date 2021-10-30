import { Component, OnInit } from '@angular/core';
import {Alarm} from "../../shared/models/alarm.model";

@Component({
  selector: 'app-bed-time',
  templateUrl: './bed-time.component.html',
  styleUrls: ['./bed-time.component.scss'],
})
export class BedTimeComponent implements OnInit {
  isFirstChoosen: boolean = true;

  alarms: Alarm[] = [
    {time: '06:45am', isSet: true },
    {time: '07:00am', isSet: true}
  ]

  constructor() { }

  ngOnInit() {}

  setFirstChoosen(event) {
    this.isFirstChoosen = event;
  }
}
