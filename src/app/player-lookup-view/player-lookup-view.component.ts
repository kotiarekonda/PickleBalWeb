import { Component, OnInit } from '@angular/core';
import { commonServices } from '../app.commonservices';
import { LocalStorageService } from 'angular-2-local-storage';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-lookup-view',
  templateUrl: './player-lookup-view.component.html',
  styleUrls: ['./player-lookup-view.component.css']
})
export class PlayerLookupViewComponent{
  @Output() userUpdated = new EventEmitter();
   playerHomePageobj: any = {};
  playerDetails: any = {};
  upLoadFile: any;
  constructor(public service: commonServices,public storage:LocalStorageService) { }

  ngOnInit() {
    let id=this.storage.get('id');
    this.service.viewplayerDetailse(id).subscribe(response => {
      this.playerDetails = response;
       this.playerDetails.PublicProfile1=Object.keys(response.PublicProfile).length;
      this.playerHomePageobj.show = 1;
      this.userUpdated.emit("naresh123");
      // if(this.playerDetails.PublicProfile1.length===0 && this.playerDetails.PublicProfile2.length===0){
      //     this.playerDetails.publicdata=0;
      // }else if(this.playerDetails.PublicProfile1.length!==0 && this.playerDetails.PublicProfile2.length===0){
      //   this.playerDetails.publicdata=0;
      // }else if(this.playerDetails.PublicProfile1.length===0 && this.playerDetails.PublicProfile2.length!==0){
      //   this.playerDetails.publicdata=0;
      // }else{
      //   this.playerDetails.publicdata=1;
      // }
      
    }, err => {
      });

    // let token = this.storage.get('Player-Token');
    // if (token !== undefined) {
    //   this.service.getPlayerDetails(token).subscribe(response => {
    //     console.log(response,"111111111111111");
    //     this.playerDetails = response;
    //     this.playerHomePageobj.PublicProfile1
    //     this.playerHomePageobj.EditTournamentProfile = false;
    //     if (this.playerDetails.PublicProfile1 === undefined && this.playerDetails.PublicProfile2 === undefined) {
    //       this.playerHomePageobj.PublicProfile1 = {};
    //       this.playerHomePageobj.PublicProfile2 = {};
    //     } else if (this.playerDetails.PublicProfile1 === undefined) {
    //       this.playerHomePageobj.PublicProfile1 = {};
    //     } else if (this.playerDetails.PublicProfile2 === undefined) {
    //       this.playerHomePageobj.PublicProfile2 = {};
    //     }
    //     if (this.playerDetails.PublicProfile1 !== undefined && this.playerDetails.PublicProfile2 !== undefined) {
    //       this.playerHomePageobj.PublicProfile1 = this.playerDetails.PublicProfile1;
    //       this.playerHomePageobj.PublicProfile2 = this.playerDetails.PublicProfile2;
    //     } else if (this.playerDetails.PublicProfile11 !== undefined) {
    //       this.playerHomePageobj.PublicProfile1 = this.playerDetails.PublicProfile1;
    //     } else if (this.playerDetails.PublicProfile2 !== undefined) {
    //       this.playerHomePageobj.PublicProfile2 = this.playerDetails.PublicProfile2;
    //     }
    //     this.playerHomePageobj.show = 1;
    //     this.playerHomePageobj.EditTournamentProfile1 = 0;
    //     this.playerHomePageobj.EditTournamentProfile2 = 0;
    //     this.playerHomePageobj.EditTournamentProfile3 = 0;
    //   }, err => {
    //     localStorage.clear();
    //     //page navigate one page to anyther page.
    //     this.router.navigate(['']);
    //   });
    // }


  }
  tournmentprofile() {
    this.playerHomePageobj.show = 1;
    this.playerHomePageobj.AddPublicProfile = 0;
  }
  publicprofile() {
    this.playerHomePageobj.show = 1;

  }
  photos() {
    this.playerHomePageobj.show = 2;
  }

  //up Load Player Img
  upLoadPlayerImg(fileInput: any) {
    let file = fileInput.target.files[0];
    let fileName = file.name;
  }

  // editTournamentProfile(arg) {
  //   this.playerHomePageobj.EditTournamentform = {};
  //   if (arg === 1) {
  //     this.playerHomePageobj.EditTournamentform.FirstName = this.playerDetails.FirstName;
  //     this.playerHomePageobj.EditTournamentform.LastName = this.playerDetails.LastName;
  //     this.playerHomePageobj.EditTournamentform.email = this.playerDetails.email;
  //     this.playerHomePageobj.EditTournamentform.UserName = this.playerDetails.UserName;
  //     this.playerHomePageobj.EditTournamentform.Gender = this.playerDetails.Gender;
  //     this.playerHomePageobj.EditTournamentform.TShirtSize = this.playerDetails.TShirtSize;
  //     this.playerHomePageobj.EditTournamentform.BirthDate = this.playerDetails.BirthDate;
  //     this.playerHomePageobj.EditTournamentProfile1 = 1;

  //   } else if (arg === 2) {
  //     this.playerHomePageobj.EditTournamentform.Address1 = this.playerDetails.Address1;
  //     this.playerHomePageobj.EditTournamentform.Address2 = this.playerDetails.Address2;
  //     this.playerHomePageobj.EditTournamentform.City = this.playerDetails.City;
  //     this.playerHomePageobj.EditTournamentform.State = this.playerDetails.State;
  //     this.playerHomePageobj.EditTournamentform.Country = this.playerDetails.Country;
  //     this.playerHomePageobj.EditTournamentform.PostalCode = this.playerDetails.PostalCode;
  //     this.playerHomePageobj.EditTournamentform.Phone = this.playerDetails.Phone;
  //     this.playerHomePageobj.EditTournamentform.EmergencyContactName = this.playerDetails.EmergencyContactName;
  //     this.playerHomePageobj.EditTournamentform.EmergencyContact = this.playerDetails.EmergencyContact;
  //     this.playerHomePageobj.EditTournamentProfile2 = 1;
  //   } else if (arg === 3) {
  //     this.playerHomePageobj.EditTournamentform.Club = this.playerDetails.Club;
  //     this.playerHomePageobj.EditTournamentform.SinglesSkillLevel = this.playerDetails.SinglesSkillLevel;
  //     this.playerHomePageobj.EditTournamentform.DoublesSkillLevel = this.playerDetails.DoublesSkillLevel;
  //     this.playerHomePageobj.EditTournamentform.USAPAMemberNumber = this.playerDetails.USAPAMemberNumber;
  //     this.playerHomePageobj.EditTournamentProfile3 = 1;
  //   } else if (arg === 4) {
  //     this.playerHomePageobj.AddPublicProfile = 1;

  //   }

  // }

  //save save Tournament edit data.
  // saveTournamenteditdata(arg) {
  //   if (arg === 1) {
  //     let obj: any = {};
  //     obj.FirstName = this.playerHomePageobj.EditTournamentform.FirstName;
  //     obj.LastName = this.playerHomePageobj.EditTournamentform.LastName;
  //     obj.email = this.playerHomePageobj.EditTournamentform.email;
  //     obj.UserName = this.playerHomePageobj.EditTournamentform.UserName;
  //     obj.Gender = this.playerHomePageobj.EditTournamentform.Gender;
  //     obj.TShirtSize = this.playerHomePageobj.EditTournamentform.TShirtSize;
  //     obj.BirthDate = this.playerHomePageobj.EditTournamentform.BirthDate;
  //     obj.token = this.storage.get('Player-Token');
  //     this.updateServiceCall(obj,1);
  //   } else if (arg === 2) {
  //     let obj: any = {};
  //     obj.Address1 = this.playerHomePageobj.EditTournamentform.Address1;
  //     obj.Address2 = this.playerHomePageobj.EditTournamentform.Address2;
  //     obj.City = this.playerHomePageobj.EditTournamentform.City;
  //     obj.State = this.playerHomePageobj.EditTournamentform.State;
  //     obj.Country = this.playerHomePageobj.EditTournamentform.Country;
  //     obj.PostalCode = this.playerHomePageobj.EditTournamentform.PostalCode;
  //     obj.Phone = this.playerHomePageobj.EditTournamentform.Phone;
  //     obj.EmergencyContactName = this.playerHomePageobj.EditTournamentform.EmergencyContactName;
  //     obj.EmergencyContact = this.playerHomePageobj.EditTournamentform.EmergencyContact;
  //     obj.token = this.storage.get('Player-Token');
  //     this.updateServiceCall(obj,2);
  //   } else if (arg === 3) {
  //     let obj: any = {};
  //     obj.Club = this.playerHomePageobj.EditTournamentform.Club;
  //     obj.SinglesSkillLevel = this.playerHomePageobj.EditTournamentform.SinglesSkillLevel;
  //     obj.DoublesSkillLevel = this.playerHomePageobj.EditTournamentform.DoublesSkillLevel;
  //     obj.USAPAMemberNumber = this.playerHomePageobj.EditTournamentform.USAPAMemberNumber;
  //     obj.token = this.storage.get('Player-Token');
  //     this.updateServiceCall(obj,3);
  //   } else if (arg === 4) {
  //     let obj: any = {};
  //       obj.PublicProfile1={};
  //       obj.PublicProfile2={};
  //       obj.PublicProfile1.Hometown = this.playerHomePageobj.PublicProfile1.Hometown;
  //       obj.PublicProfile1.Swings = this.playerHomePageobj.PublicProfile1.Swings;
  //       obj.PublicProfile1.HomeClub = this.playerHomePageobj.PublicProfile1.HomeClub;
  //       obj.PublicProfile1.IndoorOutdoorPreference = this.playerHomePageobj.PublicProfile1.IndoorOutdoorPreference;
  //       obj.PublicProfile1.FavoritePaddle = this.playerHomePageobj.PublicProfile2.FavoritePaddle;
  //       obj.PublicProfile1.BeenPlaying = this.playerHomePageobj.PublicProfile2.BeenPlaying;

  //       obj.PublicProfile2.FavoriteFacility = this.playerHomePageobj.PublicProfile2.FavoriteFacility;
  //       obj.PublicProfile2.FurthestLocation = this.playerHomePageobj.PublicProfile2.FurthestLocation;
  //       obj.PublicProfile2.MostProud = this.playerHomePageobj.PublicProfile2.MostProud;
  //       obj.PublicProfile2.SinglesDoubles = this.playerHomePageobj.PublicProfile2.SinglesDoubles;
  //       obj.PublicProfile2.MiscInformation = this.playerHomePageobj.PublicProfile2.MiscInformation;
  //       obj.token = this.storage.get('Player-Token');
  //       console.log("naresh123",obj);
  //       this.updateServiceCall(obj,4);
  //       this.playerHomePageobj.AddPublicProfile = 0;
  //   }
  // }

  // updateServiceCall(obj,arg){
  //   console.log("naresh12323344444",obj);
  //   this.service.tournamentplayerDetailseUpdate(obj).subscribe(response => {
  //       this.playerDetails = response;
  //       this. CancelEditTournament(arg);
  //     }, err => {
  //       console.log("errrore msg",err);
  //     });
  // }
  

}
