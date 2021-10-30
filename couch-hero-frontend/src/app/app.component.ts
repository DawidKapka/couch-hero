import {Component, Inject, OnInit} from '@angular/core';
import {WatchService} from "./services/watch.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(@Inject(WatchService) private watch: WatchService) {}

  ngOnInit(): void {
    this.watch.connect();
  }
}
