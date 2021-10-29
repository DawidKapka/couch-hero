import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  categories = [
    {title: 'Challeges', icon: 'military_tech'},
    {title: 'Active Time', icon: 'directions_run'},
    {title: 'Notifications', icon: 'notifications'},
    {title: 'Bed Time', icon: 'bed'}
  ];

}
