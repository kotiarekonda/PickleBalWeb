import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { commonServices } from '../app.commonservices';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
  providers: [commonServices]
})
export class PlayerRegistrationComponent{
  playersRegistrationobj:any={};
  TournamentFormObj:any={};
  constructor(public service:commonServices,public storage:LocalStorageService,public router: Router) { }

  ngOnInit() {
    this.storage.get('Player-Token');
    // $window.storage.clear();
    // this.storage.Clear();
    //  localStorage.clear();
    //page navigate one page to anyther page.
    // this.router.navigate(['/playerHomePage']);

    this.playersRegistrationobj.TournamentProfile=true;
    this.playersRegistrationobj.TournamentProfileForm=1;
    this.TournamentFormObj.DOBMonth="select Month";
    this.TournamentFormObj.DOBDate="select Date";
    this.TournamentFormObj.DOBYear="select Year";
    this.TournamentFormObj.State="select State";
    this.TournamentFormObj.Country="select Country";
    this.TournamentFormObj.SinglesSkillLevel="select Skill Level";
    this.TournamentFormObj.Gender="Select Gender";
    this.TournamentFormObj.TShirtSize="Select T Shirt Size";
    this.TournamentFormObj.DoublesSkillLevel="select Skill Level";
    this.TournamentFormObj.SkillRatingBy="select Skill Rating";
    this.TournamentFormObj.Plays="Select Plays";
  }
  //function for tournamentProfile form
  // TournamentProfile(){
  //   if(this.playersRegistrationobj.publicProfile){
  //     this.playersRegistrationobj.publicProfile=false;
  //   }
  //   this.playersRegistrationobj.TournamentProfile=true;
  //   this.playersRegistrationobj.TournamentProfileForm=1;

  // }
  //function for publicProfile form.
  publicProfile(){
    this.playersRegistrationobj.TournamentProfile=false;
      this.playersRegistrationobj.publicProfile=true;
       this.playersRegistrationobj.publicProfileForm=1;
    // if(this.playersRegistrationobj.TournamentProfile){
    //   this.playersRegistrationobj.TournamentProfile=false;
    //    this.TournamentFormObj={};
    // }
    // this.playersRegistrationobj.publicProfile=true;
  }
  //function for player Rgistration Form move to Next.
  playerRgistrationFormNext(arg){
    this.playersRegistrationobj.TournamentProfileForm++;
  }
  publicProfileFormNext(){
     this.playersRegistrationobj.publicProfileForm++;
  }

  //function for player Rgistration Form move to Back.
  playerRgistrationFormBack(){
    this.playersRegistrationobj.TournamentProfileForm--;
  }
  //function for get year.
  getYear() {
     var array=[];
    for(var i=1960;i<=2010;i++){
    	array.push(i);
      
    
    }
        return array;   
    }

    //function for click player Details button.
    playerDetails(arg){
      this.playersRegistrationobj.TournamentProfileForm=arg;
    }
    //function for click address Details button.
     contacts(arg){
      this.playersRegistrationobj.TournamentProfileForm=arg;
    }
    //function for click contact Information button.
    // contactInformation(arg){
    //   this.playersRegistrationobj.TournamentProfileForm=arg;
    // }
    //function for click membership Rating Information button.
    membershipRatingInformation(arg){
      this.playersRegistrationobj.TournamentProfileForm=arg;
    }
    //function for click publicProfile  button.
    publicProfileopstions(arg){
     this.playersRegistrationobj.publicProfileForm=arg;
    }
    //function for click publicProfile2 button.
    // publicProfile2(arg){
    //   this.playersRegistrationobj.publicProfileForm=arg;
    // }

    //function for skip
    publicProfileFormBack(){
      this.playersRegistrationobj.publicProfileForm--;
      // this.router.navigate(['/playerHomePage']);
    }

    //function for skip
    publicProfileFormSkip(){
      this.playersRegistrationobj.publicProfileForm++;
      // if(this.playersRegistrationobj.publicProfileForm!==3){
      //   this.playersRegistrationobj.publicProfileForm++;
      // }else{
      //    this.router.navigate(['/playerHomePage']);
      // }
      
    }

    // //function for click publicProfile2 button.
    // publicProfile2(arg){
    //   this.playersRegistrationobj.publicProfileForm=arg;
    // }

  //function for tournamentProfilesubmit submit
  tournamentProfilesubmit(){
    
    this.TournamentFormObj.BirthDate = this.TournamentFormObj.DOBDate+'-'+this.TournamentFormObj.DOBMonth+'-'+this.TournamentFormObj.DOBYear;
    // this.TournamentFormObj.PublicProfile = {};
    // this.TournamentFormObj.PublicProfile.Hometown = this.TournamentFormObj.Hometown;
    // this.TournamentFormObj.PublicProfile.Swings = this.TournamentFormObj.Swings;
    // this.TournamentFormObj.PublicProfile.HomeClub = this.TournamentFormObj.HomeClub;
    // this.TournamentFormObj.PublicProfile.IndoorOutdoorPreference = this.TournamentFormObj.IndoorOutdoorPreference;
    // this.TournamentFormObj.PublicProfile.FavoritePaddle = this.TournamentFormObj.FavoritePaddle;
    // this.TournamentFormObj.PublicProfile.BeenPlaying = this.TournamentFormObj.BeenPlaying;
    // this.TournamentFormObj.PublicProfile.FavoriteFacility = this.TournamentFormObj.FavoriteFacility;
    // this.TournamentFormObj.PublicProfile.FurthestLocation = this.TournamentFormObj.FurthestLocation;
    // this.TournamentFormObj.PublicProfile.MostProud = this.TournamentFormObj.MostProud;
    // this.TournamentFormObj.PublicProfile.SinglesDoubles = this.TournamentFormObj.SinglesDoubles;
    // this.TournamentFormObj.PublicProfile.MiscInformation = this.TournamentFormObj.MiscInformation;
    this.service.PlayerRegister(this.TournamentFormObj).subscribe(response => {
      this.storage.set('Player-Token',response.token);
      this.playersRegistrationobj.TournamentProfile=false;
      this.playersRegistrationobj.publicProfile=true;
      this.TournamentFormObj={};
      this.playersRegistrationobj.publicProfileForm=1;
    },err =>{
    });
  }

  //function for tournament Profile submit submit
  publicProfilesubmit(){
    if(this.playersRegistrationobj.publicProfileForm===1){
        this.TournamentFormObj.PublicProfile1 = {};
        this.TournamentFormObj.PublicProfile1.Hometown = this.TournamentFormObj.Hometown;
        this.TournamentFormObj.PublicProfile1.Swings = this.TournamentFormObj.Swings;
        this.TournamentFormObj.PublicProfile1.HomeClub = this.TournamentFormObj.HomeClub;
        this.TournamentFormObj.PublicProfile1.IndoorOutdoorPreference = this.TournamentFormObj.IndoorOutdoorPreference;
        this.TournamentFormObj.PublicProfile1.token=this.storage.get('Player-Token');
        this.service.playerRegisterUpdate(this.TournamentFormObj.PublicProfile1).subscribe(response => {
            this.playersRegistrationobj.publicProfileForm++;
            delete this.TournamentFormObj.PublicProfile1;
        },err =>{
        });

    }else if(this.playersRegistrationobj.publicProfileForm===2){
       this.TournamentFormObj.PublicProfile2={};
      this.TournamentFormObj.PublicProfile2.FavoritePaddle = this.TournamentFormObj.FavoritePaddle;
      this.TournamentFormObj.PublicProfile2.BeenPlaying = this.TournamentFormObj.BeenPlaying;
      this.TournamentFormObj.PublicProfile2.FavoriteFacility = this.TournamentFormObj.FavoriteFacility;
      this.TournamentFormObj.PublicProfile2.FurthestLocation = this.TournamentFormObj.FurthestLocation;
      this.TournamentFormObj.PublicProfile2.MostProud = this.TournamentFormObj.MostProud;
      this.TournamentFormObj.PublicProfile2.SinglesDoubles = this.TournamentFormObj.SinglesDoubles;
      this.TournamentFormObj.PublicProfile2.MiscInformation = this.TournamentFormObj.MiscInformation;
       this.TournamentFormObj.PublicProfile2.token=this.storage.get('Player-Token');
         this.service.playerRegisterUpdate( this.TournamentFormObj.PublicProfile2).subscribe(response => {
        //page navigate one page to anyther page.
        // this.router.navigate(['/playerHomePage']);
        this.playersRegistrationobj.publicProfileForm++;
    },err =>{
    });
    }else if(this.playersRegistrationobj.publicProfileForm===3){
       this.service.PlayerRegister(this.TournamentFormObj).subscribe(response => {
      this.storage.set('Player-Token',response.token);
      this.playersRegistrationobj.TournamentProfile=false;
      this.playersRegistrationobj.publicProfile=true;
      this.TournamentFormObj={};
      this.playersRegistrationobj.publicProfileForm=1;
    },err =>{
    });
    }
    
   
   
  }

}
