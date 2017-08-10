import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appData:any = {};
  constructor(public storage: LocalStorageService, public router: Router, public dialog: MdDialog) {
    let urlId;
    let previousUrl = window.location.href;
    let splittedData = previousUrl.split('/');
    for (let i = 0; i < splittedData.length; i++) {
      if (splittedData[i] === 'fp=true') {
        let length = splittedData.length;
        urlId = splittedData[length - 1];
      }
    }
    let token = this.storage.get('Player-Token');
    if (token !== null) {
      this.router.navigate(['/playerHomePage']);
    } else if (urlId) {
      this.storage.set('prccode',urlId);
      this.router.navigate(['']);
      this.appData.dialogOpen = this.dialog.open(ResetPasswordComponent);
      this.appData.forgotPassword = true;
      this.appData.dialogOpen.afterClosed().subscribe(result => {
        if (result !== undefined && result === 'Success') {
        }
      });
    }
    else {
      this.router.navigate(['']);
    }
  }

  // ngOnInit() {
  // }
  title = 'app';
}
