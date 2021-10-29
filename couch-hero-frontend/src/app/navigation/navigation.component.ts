import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  categories = [
    {title: 'Challeges', icon: 'military_tech', path: 'challenges', isActive: true},
    {title: 'Active Time', icon: 'directions_run', path: 'active-time', isActive: false},
    {title: 'Notifications', icon: 'notifications', path: 'notifications', isActive: false},
    {title: 'Bed Time', icon: 'bed', path: 'bed-time', isActive: false},
  ];

  navigateToPage(path: string) {
    this.router.navigate([path]);
    for (let category of this.categories) {
      if (category.path === path) {
        category.isActive = true;
      } else {
        category.isActive = false;
      }
    }
  }

}
