import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { commonServices } from '../app.commonservices';
import { LocalStorageService } from 'angular-2-local-storage';
import { SignInPageComponent } from '../sign-in-page/sign-in-page.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MdButtonModule } from '@angular/material';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { TournamentSignInSignUpPageComponent } from '../tournament-sign-in-sign-up-page/tournament-sign-in-sign-up-page.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [commonServices, AppService]
})
export class NavbarComponent {

  navbarobj: any = {};
  constructor(public service: commonServices, public storage: LocalStorageService, public router: Router, public dialog: MdDialog, public eventCatching: AppService) { }

  ngOnInit() {

    //catching event from player home page component for showing signup signin when user logout
    this.eventCatching.on()
      .subscribe(message => {
        if(message === 'logoutEvent'){
        this.navbarobj.signInSignupHide = false;
        }else if(message === 'registrationCompleted' || message === 'loginCompletedCompleted'){
          this.navbarobj.signInSignupHide = true;
        }
      });

    // this.navbarobj.token
    let token = this.storage.get('Player-Token');
    if (token !== null) {
      this.navbarobj.signInSignupHide = true;
    } else {
      this.navbarobj.signInSignupHide = false;
    }
    this.navbarobj.buttons = 1;
  }
  //Player data are passing one to anyther one.
  userUpdated(arg) {

  }
  //plyer button.
  home() {
    this.navbarobj.buttons = 1;
  }
  //function for sign In Up.
  signInUp() {
    this.navbarobj.signInSignupHide = false;
  }

  TOURNAMENTS() {
    this.navbarobj.buttons = 2;
  }
  //navbarobj.SignInModel
  SignInModel() {
    this.navbarobj.Dialog = this.dialog.open(SignInPageComponent);
    this.navbarobj.SignInModel = true;
    this.navbarobj.Dialog.afterClosed().subscribe(result => {
      if (result !== undefined && result === 'Success') {
        this.navbarobj.signInSignupHide = true;
        this.router.navigate(['/playerHomePage']);
      }
    });
  }

  signIn() {

    this.navbarobj.signInSignupHide = false;
    let obj: any = {};
    obj.UserName = this.navbarobj.UserName;
    obj.password = this.navbarobj.password;
    this.service.playerSignIn(obj).subscribe(response => {
      this.storage.set('Player-Token', response.token);
      //page navigate one page to anyther page.
      this.navbarobj.signInSignupHide = true;
      this.router.navigate(['/playerHomePage']);
      // this.navbarobj.SignInModel=false;
      //$('#modal').modal('hide');
    }, err => {
    });
    //  this.Home.SignInShow();
  }
  player() {
    this.navbarobj.buttons = 3;
  }
  CLUBS() {
    this.navbarobj.buttons = 4;
  }
  SHOPPING() {
    this.navbarobj.buttons = 5;
  }
  CLINICS() {
    this.navbarobj.buttons = 6;
  }
  //function for hide buttonse
  hideSignInSignOut() {
    this.navbarobj.signInSignupHide = false;
  }
  tournamentsignin() {
    this.dialog.open(TournamentSignInSignUpPageComponent);
  }

  //function for change password 

  changePassword() {
    this.navbarobj.dialogOpen = this.dialog.open(ChangePasswordComponent);
    this.navbarobj.dialogOpen.afterClosed().subscribe(result => {
      if (result !== undefined && result === 'Success') {
        // this.router.navigate(['/playerHomePage']);
      }
    });
  }

}
