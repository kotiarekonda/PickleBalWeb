import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  constructor(public storage:LocalStorageService,public router: Router) {
    
   }

  ngOnInit() {
    let token=this.storage.get('Player-Token');
      if(token!==null){
        this.router.navigate(['/playerHomePage']);
      }
  }
  // SignInShow(){
  //   console.log("nareshjjjjjjjjjj22222222222222222222222222333333333333");
  // }
  

}
