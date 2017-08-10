import { Component, OnInit } from '@angular/core';
import { commonServices } from '../app.commonservices';
import { LocalStorageService } from 'angular-2-local-storage';
import { MdDialogRef, MdDialog } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [commonServices]
})
export class ForgotPasswordComponent implements OnInit {
  forgotPwdObj: any = {}
  constructor(public service: commonServices, public storage: LocalStorageService, public dialog: MdDialogRef<any>) { }

  ngOnInit() {
    this.forgotPwdObj.emailEnteredPanel = true;
    this.forgotPwdObj.helpTextPanel = false;
    this.forgotPwdObj.errore = false;
    setTimeout(() => {
      document.getElementById('firstFieldFocus').focus();
    },500);
  }

  forgotPasswordSubmit() {
    let sampleObj: any = {};
    if (this.forgotPwdObj.Email !== undefined) {
      sampleObj.email = this.forgotPwdObj.Email;
      this.service.forgotPasswordSendMail(sampleObj).subscribe(response => {
        this.forgotPwdObj.emailEnteredPanel = false;
        this.forgotPwdObj.helpTextPanel = true;
        this.forgotPwdObj.helpText = response;
        this.forgotPwdObj.errore = false;
      }, err => {
        this.forgotPwdObj.errore = true;
        this.forgotPwdObj.errormsg = err;
      })
    } else {
      this.forgotPwdObj.errore = true;
      this.forgotPwdObj.errormsg = 'Please Enter Valid Email Id';
    }
  }

  //closing model after mail sent to entered mail id

  passwordSentToMail(){
    this.dialog.close();
  }

  //close function
  close(){
     this.dialog.close();
  }

}
