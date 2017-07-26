import { Routes } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { HomeComponent } from './home/home.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { PlayerHomePageComponent } from './player-home-page/player-home-page.component';
export const routes: Routes = [
 {  
     path: 'TOURNAMENTS', component: TournamentsComponent

 },{
    path: '', component: HomeComponent
 },
 {
    path: 'playerRegistration', component: PlayerRegistrationComponent
 },
 {
    path: 'playerHomePage', component: PlayerHomePageComponent
 }
];