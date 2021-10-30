import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NavigationComponent} from "./navigation/navigation.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ProfilePreviewComponent} from "./shared/profile-preview/profile-preview.component";
import {ChallengesComponent} from "./pages/challenges/challenges.component";
import {BedTimeComponent} from "./pages/bed-time/bed-time.component";
import {NotificationsComponent} from "./pages/notifications/notifications.component";
import {ActiveTimeComponent} from "./pages/active-time/active-time.component";
import {TopTabComponent} from "./shared/top-tab/top-tab.component";
import {ChatComponent} from "./shared/chat/chat.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {WatchService} from "./services/watch.service";

@NgModule({
  declarations: [AppComponent, NavigationComponent, ChallengesComponent, ProfilePreviewComponent, BedTimeComponent, NotificationsComponent, ActiveTimeComponent, TopTabComponent, ChatComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, MatListModule, MatButtonModule, MatIconModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, WatchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
