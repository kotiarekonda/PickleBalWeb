import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public storage:LocalStorageService,public router: Router) {
    let token=this.storage.get('Player-Token');
    console.log(">>>>>>>>>>>>>>>>>>>>>>",token);
      if(token!==null){
        this.router.navigate(['/playerHomePage']);
      }else{
        this.router.navigate(['']);
      }
   }

  // ngOnInit() {
    
  // }
  title = 'app';
}
