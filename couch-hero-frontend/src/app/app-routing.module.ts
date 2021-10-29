import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ChallengesComponent} from "./pages/challenges/challenges.component";
import {ActiveTimeComponent} from "./pages/active-time/active-time.component";
import {NotificationsComponent} from "./pages/notifications/notifications.component";
import {BedTimeComponent} from "./pages/bed-time/bed-time.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'challenges',
    pathMatch: 'full'
  },
  {
    path: 'challenges',
    component: ChallengesComponent
  },
  {
    path: 'active-time',
    component: ActiveTimeComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'bed-time',
    component: BedTimeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
