import { Component, OnInit } from '@angular/core';
import { commonServices } from '../app.commonservices';
import { MdDialogRef } from '@angular/material';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [commonServices]
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordData: any = {};

  constructor(public service: commonServices, public storage: LocalStorageService, public router: Router, public dialogRef: MdDialogRef<any>) { }

  ngOnInit() {
    this.resetPasswordData.resetPasswordHelpText = false;
    this.resetPasswordData.resetPasswordPanel = true;
  }

  //resetting password

  resetPassword() {
    if (this.resetPasswordData.password === this.resetPasswordData.confirmpassword) {
      let passwordObject: any = {};
      passwordObject.password = this.resetPasswordData.password;
      passwordObject.prccode = this.storage.get('prccode');
      this.service.resetPassword(passwordObject).subscribe(response => {
        this.resetPasswordData.resetPasswordHelpText = true;
        this.resetPasswordData.resetPasswordPanel = false;
        this.storage.remove('prccode');
        this.resetPasswordData.helpText = 'Password Resetted, Please Sign In';
      }, err => {

      })
    }
  }

  //closing model after completed the password reset functionality

  resetCompleted() {
    this.dialogRef.close();
  }

  //close function
  close() {
    this.dialogRef.close();
  }
}
