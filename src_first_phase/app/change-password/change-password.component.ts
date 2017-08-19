import { Component, OnInit } from '@angular/core';
import { commonServices } from '../app.commonservices';
import { LocalStorageService } from 'angular-2-local-storage';
import { MdDialogRef, MdDialog } from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [commonServices]
})
export class ChangePasswordComponent implements OnInit {
  changePasswordData: any = {};
  constructor(public service: commonServices, public storage: LocalStorageService, public dialog: MdDialogRef<any>) { }

  ngOnInit() {
    this.changePasswordData.passwordEnteredPanel = true;
    this.changePasswordData.helpTextPanel = false;
    setTimeout(() => {
      document.getElementById('firstFieldFocus').focus();
    }, 500);
  }


  //function for change password

  changePassword() {
    let inputObject: any = {};
    if (this.changePasswordData.newPassword === this.changePasswordData.confirmNewPassword) {
      inputObject.oldPassword = this.changePasswordData.oldPassword;
      inputObject.newPassword = this.changePasswordData.newPassword;
      inputObject.token = this.storage.get('Player-Token');
      this.service.changePassword(inputObject).subscribe(response => {
        this.changePasswordData.passwordEnteredPanel = false;
        this.changePasswordData.helpTextPanel = true;
        this.changePasswordData.helpText = 'Password Changed Successfully.'
      }, err => {
        this.changePasswordData.errore = true;
        this.changePasswordData.errormsg = 'Please Enter Valid Old Password.';
      })
    } else {
      this.changePasswordData.errore = true;
      this.changePasswordData.errormsg = 'New Password And Confirm Password Must Be Same.'
    }
  }

  //password Validation
  passWordValidastion() {
    var pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/;
    if (pattern.test(this.changePasswordData.newPassword)) {
      this.changePasswordData.password = true;
    } else {
      this.changePasswordData.password = false;
    }
  }

  //confirmation of change password

  PasswordChanged() {
    this.dialog.close();
  }

  //close function
  close() {
    this.dialog.close();
  }
}
