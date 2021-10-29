import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-tab',
  templateUrl: './top-tab.component.html',
  styleUrls: ['./top-tab.component.scss'],
})
export class TopTabComponent implements OnInit {
  @Input() label1: string = '';
  @Input() label2: string = '';

  constructor() { }

  ngOnInit() {}

}
