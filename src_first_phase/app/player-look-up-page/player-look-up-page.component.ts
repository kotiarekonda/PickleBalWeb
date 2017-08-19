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
    this.PlayerLookUpobj.totalPlayersCount = 0;
    this.PlayerLookUpobj.previousPlayersCount = 0;
    this.PlayerLookUpobj.currentPlayersCount = 0;
    this.PlayerLookUpobj.skipCount = 0;
    this.PlayerLookUpobj.previousSkip = 0;
    obj.Skip = this.PlayerLookUpobj.skipCount;
    this.PlayerLookUpobj.selectedSearchPatternName = 'Letter';
    this.PlayerLookUpobj.selectedSearchValue = 'A';
    this.playersListService(obj);
  }
  //function for Players search by letters.
  searchByLetters(letter) {
    this.PlayerLookUpobj.previousPlayersCount = 0;
    this.PlayerLookUpobj.rank = '';
    this.PlayerLookUpobj.skipCount = 0;
    this.PlayerLookUpobj.searchText = false;
    this.PlayerLookUpobj.SlectLetter = letter;
    this.PlayerLookUpobj.SearchText = '';
    this.PlayerLookUpobj.selectedSearchPatternName = 'Letter';
    this.PlayerLookUpobj.selectedSearchValue = letter;
    this.PlayerLookUpobj.previousSkip = 0;
    let obj: any = {}
    obj.Skip = this.PlayerLookUpobj.skipCount;
    obj.Letter = letter;
    this.playersListService(obj);
  }
  // function for Players search by gender.
  searchByGeder(gender) {
    this.PlayerLookUpobj.previousPlayersCount = 0;
    this.PlayerLookUpobj.rank = '';
    this.PlayerLookUpobj.skipCount = 0;
    this.PlayerLookUpobj.searchText = false;
    this.PlayerLookUpobj.SlectLetter = gender;
    this.PlayerLookUpobj.SearchText = '';
    this.PlayerLookUpobj.selectedSearchPatternName = 'Gender';
    this.PlayerLookUpobj.selectedSearchValue = gender;
    let obj: any = {}
    obj.Skip = this.PlayerLookUpobj.skipCount;
    obj.Gender = gender;
    this.playersListService(obj);
  }
  // function for Players search by Text.
  searchByText() {
    this.PlayerLookUpobj.previousPlayersCount = 0;
    this.PlayerLookUpobj.rank = '';
    let obj: any = {}
    if (this.PlayerLookUpobj.SearchText !== undefined) {
      this.PlayerLookUpobj.skipCount = 0;
      this.PlayerLookUpobj.selectedSearchPatternName = 'Name';
      this.PlayerLookUpobj.selectedSearchValue = this.PlayerLookUpobj.SearchText;
      obj.Name = this.PlayerLookUpobj.SearchText;
      obj.Skip = this.PlayerLookUpobj.skipCount;
      this.playersListService(obj);
      this.PlayerLookUpobj.searchText = true;
    }

  }

  //functions for pagination
  //click on first method
  setToFirst() {
    this.PlayerLookUpobj.skipCount = 0;
    this.PlayerLookUpobj.previousSkip = 0;
    let obj: any = {}
    obj[this.PlayerLookUpobj.selectedSearchPatternName] = this.PlayerLookUpobj.selectedSearchValue;
    obj.Skip = this.PlayerLookUpobj.skipCount;
    this.playersListService(obj);
  }

  //click on last method
  setToLast() {
    let obj: any = {}
    obj[this.PlayerLookUpobj.selectedSearchPatternName] = this.PlayerLookUpobj.selectedSearchValue;
    this.PlayerLookUpobj.skipCount = this.PlayerLookUpobj.totalPlayersCount - (this.PlayerLookUpobj.totalPlayersCount % this.PlayerLookUpobj.currentPlayersCount);
    obj.Skip = this.PlayerLookUpobj.skipCount;
    this.playersListService(obj);
  }

  //click on previous
  setToPrevious() {
    let obj: any = {}
    var skipCount = this.PlayerLookUpobj.previousSkip - this.PlayerLookUpobj.currentPlayersCount;
    this.PlayerLookUpobj.skipCount = skipCount;
    obj[this.PlayerLookUpobj.selectedSearchPatternName] = this.PlayerLookUpobj.selectedSearchValue;
    obj.Skip = skipCount;
    this.playersListService(obj);
  }

  //click on next
  setToNext() {
    let obj: any = {}
    obj[this.PlayerLookUpobj.selectedSearchPatternName] = this.PlayerLookUpobj.selectedSearchValue;
    obj.Skip = this.PlayerLookUpobj.skipCount;
    this.playersListService(obj);
  }

  //function for clear Search text.
  clearSearch() {
    this.PlayerLookUpobj.previousPlayersCount = 0;
    this.PlayerLookUpobj.searchText = false;
    this.PlayerLookUpobj.selectedSearchPatternName = '';
    this.PlayerLookUpobj.selectedSearchValue = '';
    this.PlayerLookUpobj.SearchText = "";
    this.PlayerLookUpobj.rank = '';
    this.PlayerLookUpobj.skipCount = 0;
    let Obj: any = {};
    Obj.Letter = 'A';
    this.playersListService(Obj);
  }

  //search playes service.
  playersListService(obj) {
    this.service.searchPlayer(obj).subscribe(response => {
      if (response === "No Matched Results Found") {
        this.PlayerLookUpobj.playersList = [];
        this.PlayerLookUpobj.playersListHelpText = response;
        this.PlayerLookUpobj.showPlayerData = 0;
      } else {
        this.PlayerLookUpobj.showPlayerData = 1;
        this.PlayerLookUpobj.playersList = response.PlayerDetails;
        this.PlayerLookUpobj.previousSkip = this.PlayerLookUpobj.skipCount;
        if (this.PlayerLookUpobj.skipCount > 0) {
          if (this.PlayerLookUpobj.previousPlayersCount === 0) {
            this.PlayerLookUpobj.previousPlayersCount = this.PlayerLookUpobj.skipCount;
          } else if (this.PlayerLookUpobj.previousPlayersCount === response.PlayerDetails.length) {
            this.PlayerLookUpobj.previousPlayersCount = response.PlayerDetails.length;
          }
        } else {
          this.PlayerLookUpobj.currentPlayersCount = response.PlayerDetails.length;
        }
        this.PlayerLookUpobj.totalPlayersCount = response.Count;
        this.PlayerLookUpobj.skipCount = this.PlayerLookUpobj.skipCount + response.PlayerDetails.length;
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
    this.PlayerLookUpobj.skipCount = 0;
    this.PlayerLookUpobj.previousPlayersCount = 0;
    this.PlayerLookUpobj.selectedSearchPatternName = 'SkillRatingBy';
    this.PlayerLookUpobj.selectedSearchValue = this.PlayerLookUpobj.rank;
    this.PlayerLookUpobj.searchText = false;
    this.PlayerLookUpobj.SearchText = '';
    let Obj: any = {};
    Obj.Skip = this.PlayerLookUpobj.skipCount;
    Obj.SkillRatingBy = this.PlayerLookUpobj.rank;
    this.playersListService(Obj);
  }

}
