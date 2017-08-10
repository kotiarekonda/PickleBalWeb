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
    },500);
  }


  //function for change password

  changePassword() {
    let inputObject: any = {};
    inputObject.oldPassword = this.changePasswordData.oldPassword;
    inputObject.newPassword = this.changePasswordData.newPassword;
    inputObject.token = this.storage.get('Player-Token');
    this.service.changePassword(inputObject).subscribe(response => {
      this.changePasswordData.passwordEnteredPanel = false;
      this.changePasswordData.helpTextPanel = true;
      this.changePasswordData.helpText = 'Password Changed Successfully.'
    }, err => {
      console.log(err);
    })
  }

  //confirmation of change password

  PasswordChanged(){
    this.dialog.close();
  }

  //close function
  close(){
     this.dialog.close();
  }
}
