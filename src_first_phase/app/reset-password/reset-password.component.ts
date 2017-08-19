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
    if (this.resetPasswordData.password === this.resetPasswordData.confirmpassword && this.resetPasswordData.passworderr === true) {
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
    }else{
      if(this.resetPasswordData.passworderr ===false){
         this.resetPasswordData.errormsg="Password Min 7 chars with at least one number and one special character"
      }else{
         this.resetPasswordData.errormsg="New Password And Confirm password Doesn't Matched"
      }
      this.resetPasswordData.errore=true;
     
    }
  }

//function for Password and press Enter key.
  PasswordEnter(event) {
    if (event.keyCode === 13) {
      this.resetPassword();
    }

  }
  //function for password validations.
  passWordValidastion() {
    var patren = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/;
    if (patren.test(this.resetPasswordData.password)) {
      this.resetPasswordData.passworderr = true;
    } else {
      this.resetPasswordData.passworderr = false;

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
