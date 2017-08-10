import { Component, OnInit } from '@angular/core';
import { commonServices } from '../app.commonservices';
import { LocalStorageService } from 'angular-2-local-storage';
import { MdDialogRef, MdDialog } from '@angular/material';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
  providers: [commonServices]
})
export class SignInPageComponent {
  signInobj: any = {}
  constructor(public service: commonServices, public storage: LocalStorageService, public dialogRef: MdDialogRef<any>, public dialog: MdDialog, public eventEmit: AppService) { }

  ngOnInit() {
    this.signInobj.errore = false;
    setTimeout(() => {
      document.getElementById('username').focus();
    },500);
  }

  //function for Password and press Enter key.
  PasswordEnter(event) {
    if (event.keyCode === 13) {
      this.signIn();
    }

  }
  //function for sign In.
  signIn() {
    this.signInobj.errore = false;
    let obj: any = {};
    if (this.signInobj.UserName === undefined) {
      this.signInobj.errore = true;
      this.erroremsg("Enter User Name");
    } else if (this.signInobj.password === undefined) {
      this.signInobj.errore = true;
      this.erroremsg("Enter User Password");
    } else {
      obj.UserName = this.signInobj.UserName;
      obj.password = this.signInobj.password;
      this.service.playerSignIn(obj).subscribe(response => {
        this.eventEmit.fire(`loginCompletedCompleted`);
        this.storage.set('Player-Token', response.token);
        this.signInobj.errore = false;
        this.dialogRef.close('Success');
      }, err => {
        this.signInobj.UserName = '';
        this.signInobj.password = '';
        this.signInobj.errore = true;
        var data: any = JSON.parse(err._body);
        this.erroremsg(data.message);
      });
    }
  }

  //function for calling forgot password model

  forgotPassword() {
    this.dialogRef.close();
    this.signInobj.dialogOpen = this.dialog.open(ForgotPasswordComponent);
    this.signInobj.forgotPassword = true;
    this.signInobj.dialogOpen.afterClosed().subscribe(result => {
      if (result !== undefined && result === 'Success') {
        // this.router.navigate(['/playerHomePage']);
      }
    });
  }
  //function for errore.
  erroremsg(str) {
    this.signInobj.errormsg = str;
  }
  //close diloge
  close() {
    this.dialogRef.close();
  }

}
