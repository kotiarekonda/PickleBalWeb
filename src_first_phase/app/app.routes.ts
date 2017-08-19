import { Routes } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { HomeComponent } from './home/home.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { PlayerHomePageComponent } from './player-home-page/player-home-page.component';
import { PlayerLookUpPageComponent } from './player-look-up-page/player-look-up-page.component';
import { PlayerLookupViewComponent } from './player-lookup-view/player-lookup-view.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TournmentListingpageComponent } from './tournment-listingpage/tournment-listingpage.component';
import { TournamentSetupLoginComponent } from './tournament-setup-login/tournament-setup-login.component';
import { TournamentSignInSignUpPageComponent } from './tournament-sign-in-sign-up-page/tournament-sign-in-sign-up-page.component';

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
 },
 {
    path: 'playerLookUp', component: PlayerLookUpPageComponent
 },
 {
    path: 'playerLookupView', component: PlayerLookupViewComponent
 },
 {
    path: 'TournmentListingpage', component: TournmentListingpageComponent
 },
 {
    path: 'TournamentSetupLogin', component: TournamentSetupLoginComponent
 }
 ,
 {
    path: 'TournamentSignInSignUp', component: TournamentSignInSignUpPageComponent
 }
];