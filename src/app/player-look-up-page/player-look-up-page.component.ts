import { Component, OnInit } from '@angular/core';
import { commonServices } from '../app.commonservices';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-player-look-up-page',
  templateUrl: './player-look-up-page.component.html',
  styleUrls: ['./player-look-up-page.component.css'],
  providers: [commonServices]
})
export class PlayerLookUpPageComponent implements OnInit {
  PlayerLookUpobj: any = {};
  constructor(public service: commonServices, public router: Router, public storage: LocalStorageService) {
    
  }

   ngOnInit() {
    this.PlayerLookUpobj.SearchText;
    this.PlayerLookUpobj.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let obj: any = {}
    this.PlayerLookUpobj.SlectLetter = "A";
    obj.Letter = "A";
    this.PlayerLookUpobj.searchText = false;

    this.playersListService(obj);
  }
  //function for Players search by letters.
  searchByLetters(letter) {
    this.PlayerLookUpobj.searchText = false;
    this.PlayerLookUpobj.SlectLetter = letter;
    this.PlayerLookUpobj.SearchText = '';
    let obj: any = {}
    obj.Letter = letter;
    this.playersListService(obj);
  }
  // function for Players search by gender.
  searchByGeder(gender) {
    this.PlayerLookUpobj.searchText = false;
    this.PlayerLookUpobj.SlectLetter = gender;
    this.PlayerLookUpobj.SearchText = '';
    let obj: any = {}
    obj.Gender = gender;
    this.playersListService(obj);
  }
  // function for Players search by Text.
  searchByText() {
    this.PlayerLookUpobj.SlectLetter = this.PlayerLookUpobj.SearchText;
    let obj: any = {}
    if (this.PlayerLookUpobj.SearchText.length !== 0) {
      obj.Name = this.PlayerLookUpobj.SearchText;
      this.playersListService(obj);
      this.PlayerLookUpobj.searchText = true;
    }

  }

  //function for clear Search text.
  clearSearch() {
    this.PlayerLookUpobj.searchText = false;
    this.PlayerLookUpobj.SearchText = "";
    this.PlayerLookUpobj.rank = '';
    let Obj: any = {};
    Obj.Letter = 'A';
    this.playersListService(Obj);
  }

  //search playes service.
  playersListService(obj) {
    this.service.searchPlayer(obj).subscribe(response => {
      if (response !== "No Matched Results Found") {
        this.PlayerLookUpobj.playersList = response;
        this.PlayerLookUpobj.showPlayerData = 1;
      } else {
        this.PlayerLookUpobj.playersList = response;
        this.PlayerLookUpobj.showPlayerData = 0;
      }
    }, err => {
    });
  }

  //function for view Player Detailse.

  viewPlayerDetailse(obj) {
    this.storage.set('id', obj._id);
    this.service.viewplayerobj(obj);
    this.router.navigate(['/playerLookupView']);

  }

  //search based on dropdown

  rankSelection() {
    this.PlayerLookUpobj.searchText = false;
    this.PlayerLookUpobj.SearchText = '';
    let Obj: any = {};
    Obj.SkillRatingBy = this.PlayerLookUpobj.rank;
    this.playersListService(Obj);
  }

}
