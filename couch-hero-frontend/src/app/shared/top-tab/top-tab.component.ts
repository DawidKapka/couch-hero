import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-tab',
  templateUrl: './top-tab.component.html',
  styleUrls: ['./top-tab.component.scss'],
})
export class TopTabComponent implements OnInit {
  @Input() label1: string = '';
  @Input() label2: string = '';

  @Output() isFirstChoosenEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  isFirstChoosen: boolean = true;

  constructor() { }

  ngOnInit() {}

  emitFirstChoosen(choosen: boolean) {
    this.isFirstChoosen = choosen;
    this.isFirstChoosenEvent.emit(choosen);
  }

}
