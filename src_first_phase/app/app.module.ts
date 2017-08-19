import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from "@angular/http";
// import {WebStorageModule, LocalStorageService} from "angular2-localstorage";
import { LocalStorageModule } from 'angular-2-local-storage';
import { commonServices } from './app.commonservices';
import { FormsModule } from '@angular/forms';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { MyNewComponenComponent } from './my-new-componen/my-new-componen.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomeComponent } from './home/home.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { PlayerHomePageComponent } from './player-home-page/player-home-page.component';
// import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDatepickerModule } from '@angular/material';
import {  MaterialModule,MdNativeDateModule ,MdIconModule,MdListModule,MdCardModule,MdRadioModule} from '@angular/material';
import { PlayerLookUpPageComponent } from './player-look-up-page/player-look-up-page.component';
import { PlayerLookupViewComponent } from './player-lookup-view/player-lookup-view.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TournmentListingpageComponent } from './tournment-listingpage/tournment-listingpage.component';
import { TournamentSetupLoginComponent } from './tournament-setup-login/tournament-setup-login.component';
// import { TournamentComponent } from './tournament/tournament.component';
import { TournamentSignInSignUpPageComponent } from './tournament-sign-in-sign-up-page/tournament-sign-in-sign-up-page.component';
import { AppService } from './app.service';
import { Broadcaster } from './app.broadcaster';
import { OnlyNumberDirective } from './only-number.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponenComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    TournamentsComponent,
    HomeComponent,
    PlayerRegistrationComponent,
    PlayerHomePageComponent,
    PlayerLookUpPageComponent,
    PlayerLookupViewComponent,
    SignInPageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    TournmentListingpageComponent,
    TournamentSetupLoginComponent,
    // TournamentComponent,
    TournamentSignInSignUpPageComponent,
    OnlyNumberDirective    
    
  ],
  
  imports: [
    BrowserModule, HttpModule, JsonpModule, FormsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdIconModule,
    MdListModule,
    LocalStorageModule.withConfig({
      prefix: 'pickleBall',
      storageType: 'localStorage'
    })
  ],
  providers: [commonServices, LocalStorageModule, AppService, Broadcaster],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [SignInPageComponent,ForgotPasswordComponent,ResetPasswordComponent,ChangePasswordComponent]
})
export class AppModule { }
