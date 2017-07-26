import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { commonServices } from '../app.commonservices';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [commonServices]
})
export class NavbarComponent{
   
  navbarobj:any={};
  constructor( public service:commonServices,public storage:LocalStorageService,public router: Router) { }

  ngOnInit() {
    // this.navbarobj.token
    // let token=this.storage.get('Player-Token');
    // if(token!==null){
    //   this.navbarobj.token=this.storage.get('Player-Token');
    // }
    this.navbarobj.buttons=1;
  }

  //plyer button.
  home(){
   this.navbarobj.buttons=1;
  }
  
   TOURNAMENTS(){
    this.navbarobj.buttons=2;
  }
  //navbarobj.SignInModel
  SignInModel(){
    this.navbarobj.SignInModel=true;
  }
   signIn(){
     let obj:any={};
     obj.UserName=this.navbarobj.UserName;
      obj.password=this.navbarobj.password;
       this.service.playerSignIn(obj).subscribe(response => {
        this.storage.set('Player-Token',response.token);
        //page navigate one page to anyther page.
        this.router.navigate(['/playerHomePage']);
        // this.navbarobj.SignInModel=false;
        //$('#modal').modal('hide');
    },err =>{
    });
  //  this.Home.SignInShow();
  }
   player(){
   this.navbarobj.buttons=3;
  }
   CLUBS(){
    this.navbarobj.buttons=4;
  }
  SHOPPING(){
    this.navbarobj.buttons=5;
  }
   CLINICS(){
   this.navbarobj.buttons=6;
  }
  
}
