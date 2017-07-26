import { Component, OnInit } from '@angular/core';
import { commonServices } from '../app.commonservices';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-player-home-page',
  templateUrl: './player-home-page.component.html',
  styleUrls: ['./player-home-page.component.css'],
  providers: [commonServices]
})
export class PlayerHomePageComponent {
  playerHomePageobj: any = {};
  playerDetails: any = {};
  upLoadFile:any;
  constructor(public service: commonServices, public storage: LocalStorageService, public router: Router) { }

  ngOnInit() {

    let token = this.storage.get('Player-Token');
    if (token !== undefined) {
      this.service.getPlayerDetails(token).subscribe(response => {
        this.playerDetails = response;
        this.playerHomePageobj.PublicProfile1
        this.playerHomePageobj.EditTournamentProfile = false;
        if (this.playerDetails.PublicProfile1 === undefined && this.playerDetails.PublicProfile2 === undefined) {
          this.playerHomePageobj.PublicProfile1 = {};
          this.playerHomePageobj.PublicProfile2 = {};
        } else if (this.playerDetails.PublicProfile1 === undefined) {
          this.playerHomePageobj.PublicProfile1 = {};
        } else if (this.playerDetails.PublicProfile2 === undefined) {
          this.playerHomePageobj.PublicProfile2 = {};
        }
        if (this.playerDetails.PublicProfile1 !== undefined && this.playerDetails.PublicProfile2 !== undefined) {
          this.playerHomePageobj.PublicProfile1 = this.playerDetails.PublicProfile1;
          this.playerHomePageobj.PublicProfile2 = this.playerDetails.PublicProfile2;
        } else if (this.playerDetails.PublicProfile11 !== undefined) {
          this.playerHomePageobj.PublicProfile1 = this.playerDetails.PublicProfile1;
        } else if (this.playerDetails.PublicProfile2 !== undefined) {
          this.playerHomePageobj.PublicProfile2 = this.playerDetails.PublicProfile2;
        }
        this.playerHomePageobj.show = 1;
      }, err => {
        localStorage.clear();
        //page navigate one page to anyther page.
        this.router.navigate(['']);
      });
    }


  }
  tournmentprofile() {
    this.playerHomePageobj.show = 1;
    this.playerHomePageobj.AddPublicProfile = false;
  }
  publicprofile() {
    this.playerHomePageobj.show = 2;
    this.playerHomePageobj.AddPublicProfile = false;
    this.playerHomePageobj.EditTournamentProfile = false;

  }
  photos() {
    this.playerHomePageobj.show = 3;
  }

  //up Load Player Img
  upLoadPlayerImg(fileInput: any){
    let file = fileInput.target.files[0];
    let fileName = file.name;
  }
  //Add Details InPublic Profile.
  AddDetailsInPublicProfile() {
    this.playerHomePageobj.publicProfileopstions = 1;
    this.playerHomePageobj.AddPublicProfile = true;
  }
  //publicProfileopstions.
  publicProfileopstions(arg) {
    this.playerHomePageobj.publicProfileopstions = arg;
  }
  //edit tournament Profile submit functionality.
  tournamentProfilesubmit(obj) {
    obj.BirthDate = this.playerHomePageobj.EditTournamentform.DOBDate + '-' + this.playerHomePageobj.EditTournamentform.DOBMonth + '-' + this.playerHomePageobj.EditTournamentform.DOBYear;
    obj.token = this.storage.get('Player-Token');
    this.service.tournamentplayerDetailseUpdate(obj).subscribe(response => {
      this.playerDetails = response;
      this.playerHomePageobj.EditTournamentProfile = false;
    }, err => {
    });
  }
  //Cancel Edit Public Profile.
  CancelEditPublicProfile() {
    this.playerHomePageobj.AddPublicProfile = false;
  }


  //submit publicProfile1 one form.
  publicProfile1(obj) {
    obj.token = this.storage.get('Player-Token');
    this.service.playerRegisterUpdate(obj).subscribe(response => {
      this.playerDetails.PublicProfile1 = this.playerHomePageobj.PublicProfile1;
      this.playerHomePageobj.publicProfileopstions++;
    }, err => {
    });
  }

  //submit publicProfile2 one form.
  publicProfile2(obj) {
    obj.token = this.storage.get('Player-Token');
    this.service.playerRegisterUpdate(obj).subscribe(response => {
      this.playerDetails.PublicProfile2 = this.playerHomePageobj.PublicProfile2;
      this.playerHomePageobj.AddPublicProfile = false;
    }, err => {
    });
  }

  //function for get year.
  getYear() {
    var array = [];
    for (var i = 1960; i <= 2010; i++) {
      array.push(i);


    }
    return array;
  }

  //function for player Rgistration Form move to Next.
  playerRgistrationFormNext() {
    this.playerHomePageobj.EditTournamentProfileform++;
  }
  publicProfileFormNext() {
    this.playerHomePageobj.publicProfileForm++;
  }

  //function for player Rgistration Form move to Back.
  playerRgistrationFormBack() {
    this.playerHomePageobj.EditTournamentProfileform--;
  }

  //function for click player Details button.
  TournamentFormOpstion(arg) {
    this.playerHomePageobj.EditTournamentProfileform = arg;
  }


  //logout button and move to home page
  LogOut() {
    //cleare locale storage.
    localStorage.clear();
    this.router.navigate(['/']);

  }
  //Cancel Edit Tournament profile.
  CancelEditTournament() {
    this.playerHomePageobj.EditTournamentProfile = false;
  }
  //Edit Tournament Profile.
  EditTournamentProfile() {
    let string = this.playerDetails.BirthDate
    let array = string.split('-');

    this.playerHomePageobj.EditTournamentform = {};
    this.playerHomePageobj.EditTournamentform.DOBDate = array[0];
    this.playerHomePageobj.EditTournamentform.DOBMonth = array[1];
    this.playerHomePageobj.EditTournamentform.DOBYear = array[2];
    this.playerHomePageobj.EditTournamentform.FirstName = this.playerDetails.FirstName;
    this.playerHomePageobj.EditTournamentform.LastName = this.playerDetails.LastName;
    this.playerHomePageobj.EditTournamentform.email = this.playerDetails.email;
    this.playerHomePageobj.EditTournamentform.UserName = this.playerDetails.UserName;
    this.playerHomePageobj.EditTournamentform.BirthDate = this.playerDetails.BirthDate;
    this.playerHomePageobj.EditTournamentform.Address1 = this.playerDetails.Address1;
    this.playerHomePageobj.EditTournamentform.Address2 = this.playerDetails.Address2;
    this.playerHomePageobj.EditTournamentform.City = this.playerDetails.City;
    this.playerHomePageobj.EditTournamentform.State = this.playerDetails.State;
    this.playerHomePageobj.EditTournamentform.Country = this.playerDetails.Country;
    this.playerHomePageobj.EditTournamentform.PostalCode = this.playerDetails.PostalCode;
    this.playerHomePageobj.EditTournamentform.Phone = this.playerDetails.Phone;
    this.playerHomePageobj.EditTournamentform.EmergencyContactName = this.playerDetails.EmergencyContactName;
    this.playerHomePageobj.EditTournamentform.EmergencyContact = this.playerDetails.EmergencyContact;
    this.playerHomePageobj.EditTournamentform.Club = this.playerDetails.Club;
    this.playerHomePageobj.EditTournamentform.SkillLevel = this.playerDetails.SkillLevel;
    this.playerHomePageobj.EditTournamentform.SkillRatingBy = this.playerDetails.SkillRatingBy;
    this.playerHomePageobj.EditTournamentform.USAPAMemberNumber = this.playerDetails.USAPAMemberNumber;
    this.playerHomePageobj.EditTournamentProfile = true;
    this.playerHomePageobj.EditTournamentProfileform = 1;
  }

}
