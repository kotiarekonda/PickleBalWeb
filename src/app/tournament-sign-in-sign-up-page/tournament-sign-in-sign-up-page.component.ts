import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tournament-sign-in-sign-up-page',
  templateUrl: './tournament-sign-in-sign-up-page.component.html',
  styleUrls: ['./tournament-sign-in-sign-up-page.component.css']
})
export class TournamentSignInSignUpPageComponent implements OnInit {

login:any;signup:any;
  constructor() { }

  ngOnInit() {
  	this.login=true;
  }
  pbsignup(){
  	this.login=false;
  	this.signup=true;
  }

}
