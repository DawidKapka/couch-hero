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

@NgModule({
  declarations: [AppComponent, NavigationComponent, ChallengesComponent, ProfilePreviewComponent, BedTimeComponent, NotificationsComponent, ActiveTimeComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, MatListModule, MatButtonModule, MatIconModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
