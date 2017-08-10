import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { commonServices } from '../app.commonservices';
import { Router } from '@angular/router';
import { AppService } from '../app.service';



@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
  providers: [commonServices]
})
export class PlayerRegistrationComponent {
  playersRegistrationobj: any = {};
  TournamentFormObj: any = {};
  storingTournamentProfileInformation: any = {};
  storingPublicProfileFirstPhase: any = {};
  storingPublicProfileSecondPhase: any = {};
  storingPublicProfileThirdPhase: any = {};
  constructor(public service: commonServices, public storage: LocalStorageService, public router: Router, public eventEmit: AppService) {
  }

  ngOnInit() {
    this.playersRegistrationobj.states = [];
    this.playersRegistrationobj.countries = [];
    this.storage.get('Player-Token');
    setTimeout(() => {
      document.getElementById('firstname').focus();
    },500);
    // $window.storage.clear();
    // this.storage.Clear();
    //  localStorage.clear();
    //page navigate one page to anyther page.
    // this.router.navigate(['/playerHomePage']);


    // this.playersRegistrationobj.publicProfileForm = 1;
    // this.playersRegistrationobj.publicProfile = true;

    this.playersRegistrationobj.TournamentProfile = true;
    this.playersRegistrationobj.TournamentProfileForm = 1;
    this.TournamentFormObj.State = "Select State";
    this.TournamentFormObj.Country = "Select Country";
    this.TournamentFormObj.DOBMonth = "select Month";
    this.TournamentFormObj.DOBDate = "select Date";
    this.TournamentFormObj.DOBYear = "select Year";
    this.TournamentFormObj.SinglesSkillLevel = "Select Skill Level";
    this.TournamentFormObj.Gender = "Select Gender";
    this.TournamentFormObj.TShirtSize = "Select T Shirt Size";
    this.TournamentFormObj.DoublesSkillLevel = "Select Skill Level";
    // this.TournamentFormObj.Swings = "Select Swings";
  }

  //function for userName Validastion
  userNameValidastion() {
    this.playersRegistrationobj.userName;
    if (this.TournamentFormObj.UserName.length > 4 && this.TournamentFormObj.UserName.length < 20) {
      this.playersRegistrationobj.userName = true;
    } else {
      this.playersRegistrationobj.userName = false;
    }
  }

  passWordValidastion() {
    var naresh = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/;
    if (naresh.test(this.TournamentFormObj.password)) {
      this.playersRegistrationobj.password = true;
    } else {
      this.playersRegistrationobj.password = false;
    }
  }
  //fuction for Favorite facility textarea.
  FavoriteFacility() {

    if (this.TournamentFormObj.FavoriteFacility.length !== 0) {
      this.playersRegistrationobj.FavoriteFacilitycount = 150 - this.TournamentFormObj.FavoriteFacility.length;
    } else {
      this.playersRegistrationobj.FavoriteFacilitycount = 0;
    }
  }
  //function for Furthest Location textarea.
  FurthestLocation() {
    if (this.TournamentFormObj.FurthestLocation.length !== 0) {
      this.playersRegistrationobj.FurthestLocationcount = 150 - this.TournamentFormObj.FurthestLocation.length;
    } else {
      this.playersRegistrationobj.FurthestLocationcount = 0;
    }
  }
  //function for most Proud textarea.
  mostProud() {
    if (this.TournamentFormObj.MostProud.length !== 0) {
      this.playersRegistrationobj.MostProudcount = 150 - this.TournamentFormObj.MostProud.length;
    } else {
      this.playersRegistrationobj.MostProudcount = 0;
    }

  }
  //function for Singles Or Doubles textarea.
  SinglesOrDoubles() {
    if (this.TournamentFormObj.SinglesDoubles.length !== 0) {
      this.playersRegistrationobj.SinglesDoublescount = 150 - this.TournamentFormObj.SinglesDoubles.length;
    } else {
      this.playersRegistrationobj.FurthestLocationcount = 0;
    }
  }

  //function for Misc Information textarea.
  MiscInformation() {
    if (this.TournamentFormObj.MiscInformation.length !== 0) {
      this.playersRegistrationobj.MiscInformationcount = 150 - this.TournamentFormObj.MiscInformation.length;
    } else {
      this.playersRegistrationobj.MiscInformationcount = 0;
    }
  }

  //Function fpr Confirm Password and password match are not
  ConfirmPassword() {
    if (this.playersRegistrationobj.password !== undefined && this.playersRegistrationobj.password === true && this.TournamentFormObj.Confarmpassword !== undefined) {
      if (this.TournamentFormObj.password === this.TournamentFormObj.Confarmpassword) {
        this.playersRegistrationobj.ConfarmPassword = true;
      } else {
        this.playersRegistrationobj.ConfarmPassword = false;
      }
    }

  }
  //function for publicProfile form.
  publicProfile() {
    this.playersRegistrationobj.TournamentProfile = false;
    this.playersRegistrationobj.publicProfile = true;
    this.playersRegistrationobj.publicProfileForm = 1;
  }
  //function for player Rgistration Form move to Next.
  playerRgistrationFormNext() {
    if(this.playersRegistrationobj.states.length === 0){
      this.getallstates();
    }
    if(this.playersRegistrationobj.countries.length === 0){
      this.getcountries();
    }
    if(this.playersRegistrationobj.states.length === 0){
      this.getallstates();
    }
    if(this.playersRegistrationobj.countries.length === 0){
      this.getcountries();
    }
    if (this.playersRegistrationobj.TournamentProfileForm === 1) {

      if (this.TournamentFormObj.DOBMonth === "select Month") {
      } else if (this.TournamentFormObj.DOBDate === "select Date") {
      } else if (this.TournamentFormObj.DOBYear === "select Year") {
      } else {
        this.TournamentFormObj.BirthDate = this.TournamentFormObj.DOBDate + '-' + this.TournamentFormObj.DOBMonth + '-' + this.TournamentFormObj.DOBYear;
      }

      if (this.TournamentFormObj.FirstName === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.LastName === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.email === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.UserName === undefined || this.playersRegistrationobj.userName === false) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.password === undefined || this.playersRegistrationobj.password === false) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.Confarmpassword === undefined || this.playersRegistrationobj.ConfarmPassword === false) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.Gender === undefined || this.TournamentFormObj.Gender === 'Select Gender') {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.TShirtSize === undefined || this.TournamentFormObj.TShirtSize === 'Select T Shirt Size') {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.BirthDate === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else {
        if (this.TournamentFormObj.email !== undefined) {
          var atpos = this.TournamentFormObj.email.indexOf("@");
          var dotpos = this.TournamentFormObj.email.lastIndexOf(".");
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.TournamentFormObj.email.length) {
            this.TournamentFormerror('Not A Valid E-Mail Address');
          } else {
            this.playersRegistrationobj.TournamentFormerror = false;
            this.playersRegistrationobj.TournamentProfileForm++;
          }
        }



        //     var atpos = x.indexOf("@");
        // var dotpos = x.lastIndexOf(".");
        // if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        //     alert("Not a valid e-mail address");
        //     return false;
        // }

      }

    } else if (this.playersRegistrationobj.TournamentProfileForm === 2) {
      if (this.TournamentFormObj.Address1 === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.City === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.State === undefined || this.TournamentFormObj.State === "Select State") {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.PostalCode === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.Country === undefined || this.TournamentFormObj.Country === "Select Country") {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.Phone === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.EmergencyContactName === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.EmergencyContact === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else {
        this.playersRegistrationobj.TournamentFormerror = false;
        this.playersRegistrationobj.TournamentProfileForm++;
      }
    }


    // this.playersRegistrationobj.TournamentProfileForm++;
  }
  //Tournament Forme showing rror.
  TournamentFormerror(str) {
    this.playersRegistrationobj.TournamentFormerrormsg = str;
    this.playersRegistrationobj.TournamentFormerror = true;
  }
  publicProfileFormNext() {

    this.playersRegistrationobj.publicProfileForm++;
  }

  //function for player file up load function.
  upLoadPlayerImg(fileInput: any) {
    this.TournamentFormObj.ProfilePic = fileInput.target.files;
  }

  //function for player Rgistration Form move to Back.
  playerRgistrationFormBack() {
    this.playersRegistrationobj.TournamentProfileForm--;
  }
  //function for get year.
  getYear() {
    var array = [];
    for (var i = 1960; i <= 2010; i++) {
      array.push(i);


    }
    return array;
  }

  //function for click player Details button.
  playerDetails(arg) {
    this.playersRegistrationobj.TournamentProfileForm = arg;
  }
  //function for click address Details button.
  contacts(arg) {

    if(this.playersRegistrationobj.states.length === 0){
      this.getallstates();
    }
    if(this.playersRegistrationobj.countries.length === 0){
      this.getcountries();
    }
    this.playersRegistrationobj.TournamentProfileForm = arg;
  }
  //function for click membership Rating Information button.
  membershipRatingInformation(arg) {
    this.playersRegistrationobj.TournamentProfileForm = arg;
  }
  //function for click publicProfile  button.
  publicProfileopstions(arg) {
    this.playersRegistrationobj.publicProfileForm = arg;
    //This case for showing previously added data in public profile when user navigate to tournament profile and public profile
    switch (this.playersRegistrationobj.publicProfileForm) {
      case 1: {
        if (Object.keys(this.storingPublicProfileFirstPhase))
          this.TournamentFormObj = this.storingPublicProfileFirstPhase;
        else this.TournamentFormObj = {};
        break;
      }
      case 2: {
        if (Object.keys(this.storingPublicProfileSecondPhase))
          this.TournamentFormObj = this.storingPublicProfileSecondPhase;
        else this.TournamentFormObj = {};
        break;
      }
      case 3: {
        if (Object.keys(this.storingPublicProfileThirdPhase))
          this.TournamentFormObj = this.storingPublicProfileThirdPhase;
        else this.TournamentFormObj = {};
        break;
      }
    }
  }

  //function for skip
  publicProfileFormBack() {
    this.playersRegistrationobj.publicProfileForm--;

    //This case for showing previously added data in public profile when user navigate to tournament profile and public profile
    switch (this.playersRegistrationobj.publicProfileForm) {
      case 1: {
        if (Object.keys(this.storingPublicProfileFirstPhase))
          this.TournamentFormObj = this.storingPublicProfileFirstPhase;
        else this.TournamentFormObj = {};
        break;
      }
      case 2: {
        if (Object.keys(this.storingPublicProfileSecondPhase))
          this.TournamentFormObj = this.storingPublicProfileSecondPhase;
        else this.TournamentFormObj = {};
        break;
      }
      case 3: {
        if (Object.keys(this.storingPublicProfileThirdPhase))
          this.TournamentFormObj = this.storingPublicProfileThirdPhase;
        else this.TournamentFormObj = {};
        break;
      }
    }
    // this.router.navigate(['/playerHomePage']);
  }

  //function for skip
  // publicProfileFormSkip() {
  //   this.playersRegistrationobj.TournamentFormerror = false;
  //   this.playersRegistrationobj.publicProfileForm++;
  //   if (this.playersRegistrationobj.publicProfileForm === 3) {
  //     this.router.navigate(['/playerHomePage']);
  //   }

  // }

  //fu
  //function for tournamentProfilesubmit submit
  tournamentProfilesubmit() {
    if (this.TournamentFormObj.SinglesSkillLevel === undefined || this.TournamentFormObj.State === "Select Skill Level") {
      this.TournamentFormerror('Please Fill All Required Fields');
    } else if (this.TournamentFormObj.DoublesSkillLevel === undefined || this.TournamentFormObj.DoublesSkillLevel === "Select Skill Level") {
      this.TournamentFormerror('Please Fill All Required Fields');
    } else if (this.TournamentFormObj.USAPAMemberNumber === undefined) {
      this.TournamentFormerror('Please Fill All Required Fields');
    } else {
      // let string1 = this.TournamentFormObj.BirthDate;
      // let array1 = string1.toString().split(' ');
      // this.TournamentFormObj.BirthDate = array1[1] + "-" + array1[2] + "-" + array1[3];
      this.playersRegistrationobj.TournamentFormerror = false;
      this.TournamentFormObj.role = 'Player';
      this.storingTournamentProfileInformation = this.TournamentFormObj;
      this.service.PlayerRegister(this.TournamentFormObj).subscribe(response => {
        this.storage.set('Player-Token', response.token);
        this.playersRegistrationobj.TournamentProfile = false;
        this.playersRegistrationobj.publicProfile = true;
        this.TournamentFormObj = {};
        this.playersRegistrationobj.publicProfileForm = 1;
        this.eventEmit.fire(`registrationCompleted`);

      }, err => {
        var data: any = JSON.parse(err._body);
        this.TournamentFormerror(data);
      });
    }
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
  }



  //states service 
  getallstates(){
    this.service.allstates().subscribe(response => {
        this.playersRegistrationobj.states = response;
      }, err => {
        console.log("err >>>>>", err);
    });
  }

  //get all countries
  getcountries(){
    this.service.allcountries().subscribe(response => {
        this.playersRegistrationobj.countries = response;
      }, err => {
        console.log("err >>>>>", err);
    });
  }

  //function for tournament Profile submit submit
  publicProfilesubmit() {
    if (this.playersRegistrationobj.publicProfileForm === 1) {
      this.TournamentFormObj.PublicProfile1 = {};
      var formData: FormData = new FormData();
      var PublicProfileservice = 0;
      if (this.TournamentFormObj.ProfilePic !== undefined) {
        PublicProfileservice = 1;
        formData.append('ProfilePic', this.TournamentFormObj.ProfilePic[0]);
      }
      if (this.TournamentFormObj.Swings !== undefined) {
        PublicProfileservice = 1;
        formData.append('Swings', this.TournamentFormObj.Swings);
      }
      if (this.TournamentFormObj.Hometown !== undefined) {
        PublicProfileservice = 1;
        formData.append('HomeTown', this.TournamentFormObj.Hometown);
      }
      if (this.TournamentFormObj.HomeClub !== undefined) {
        PublicProfileservice = 1;
        formData.append('HomeClub', this.TournamentFormObj.HomeClub);
      }
      if (this.TournamentFormObj.SponsoredClub !== undefined) {
        PublicProfileservice = 1;
        formData.append('SponsoredClub', this.TournamentFormObj.SponsoredClub);
      }
      if (this.TournamentFormObj.IndoorOutdoorPreference !== undefined) {
        PublicProfileservice = 1;
        formData.append('IndoorOutdoorPreference', this.TournamentFormObj.IndoorOutdoorPreference);
      }
      if (this.TournamentFormObj.FavoritePaddle !== undefined) {
        PublicProfileservice = 1;
        formData.append('FavoritePaddle', this.TournamentFormObj.FavoritePaddle);
      }
      if (this.TournamentFormObj.BeenPlaying !== undefined) {
        PublicProfileservice = 1;
        formData.append('BeenPlaying', this.TournamentFormObj.BeenPlaying);
      }
      if (PublicProfileservice === 1) {
        formData.append('key', "PublicProfile1");
        this.TournamentFormObj.PublicProfile1.formData = formData;
        this.storingPublicProfileFirstPhase = this.TournamentFormObj;
        this.TournamentFormObj.PublicProfile1.token = this.storage.get('Player-Token');
        delete this.TournamentFormObj.ProfilePic;

        this.service.playerRegisterUpdate(this.TournamentFormObj.PublicProfile1).subscribe(response => {
          this.playersRegistrationobj.publicProfileForm++;
          this.playersRegistrationobj.TournamentFormerror = false;
          delete this.TournamentFormObj.PublicProfile1;
        }, err => {
        });
      } else {
        this.playersRegistrationobj.publicProfileForm++;
      }

    } else if (this.playersRegistrationobj.publicProfileForm === 2) {
      this.TournamentFormObj.PublicProfile2 = {};
      var PublicProfileservice = 0;
      if (this.TournamentFormObj.FavoriteFacility !== undefined) {
        PublicProfileservice = 1;
        this.TournamentFormObj.PublicProfile2.FavoriteFacility = this.TournamentFormObj.FavoriteFacility;
      }
      if (this.TournamentFormObj.FurthestLocation !== undefined) {
        PublicProfileservice = 1;
        this.TournamentFormObj.PublicProfile2.FurthestLocation = this.TournamentFormObj.FurthestLocation;
      }
      if (this.TournamentFormObj.MostProud !== undefined) {
        PublicProfileservice = 1;
        this.TournamentFormObj.PublicProfile2.MostProud = this.TournamentFormObj.MostProud;
      }
      if (this.TournamentFormObj.SinglesDoubles !== undefined) {
        PublicProfileservice = 1;
        this.TournamentFormObj.PublicProfile2.SinglesDoubles = this.TournamentFormObj.SinglesDoubles;
      }
      if (this.TournamentFormObj.MiscInformation !== undefined) {
        PublicProfileservice = 1;
        this.TournamentFormObj.PublicProfile2.MiscInformation = this.TournamentFormObj.MiscInformation;
      }
      if (PublicProfileservice === 1) {
        this.storingPublicProfileSecondPhase = this.TournamentFormObj;
        this.TournamentFormObj.PublicProfile2.token = this.storage.get('Player-Token');
        this.TournamentFormObj.PublicProfile2.key = "PublicProfile2";
        this.service.playerRegisterUpdate(this.TournamentFormObj.PublicProfile2).subscribe(response => {
          this.playersRegistrationobj.publicProfileForm++;
        }, err => {
        });
      } else {
        this.playersRegistrationobj.publicProfileForm++;
      }
    } else if (this.playersRegistrationobj.publicProfileForm === 3) {
      if (this.TournamentFormObj.ProfilePic !== undefined) {
        let obj: any = {};
        let array: any = [];
        var formData: FormData = new FormData();
        for (var i = 0; this.TournamentFormObj.ProfilePic.length > i; i++) {
          formData.append('Photos[]', this.TournamentFormObj.ProfilePic[i]);
        }

        formData.append('key', "Photos");
        obj.formData = formData;
        obj.token = this.storage.get('Player-Token');
        delete this.TournamentFormObj.ProfilePic;
        this.storingPublicProfileThirdPhase = this.TournamentFormObj;
        this.service.playerRegisterUpdate(obj).subscribe(response => {
          this.storingTournamentProfileInformation = {};
          this.storingPublicProfileFirstPhase = {};
          this.storingPublicProfileSecondPhase = {};
          this.storingPublicProfileThirdPhase = {};
          this.router.navigate(['/playerHomePage']);
        }, err => {
        });
      } else {
        this.router.navigate(['/playerHomePage']);
      }


      // this.service.PlayerRegister(this.TournamentFormObj).subscribe(response => {
      //   this.storage.set('Player-Token', response.token);
      //   this.playersRegistrationobj.TournamentProfile = false;
      //   this.playersRegistrationobj.publicProfile = true;
      //   this.TournamentFormObj = {};
      //   //page navigate one page to anyther page.
      //   this.router.navigate(['/playerHomePage']);
      //   // this.playersRegistrationobj.publicProfileForm = 1;
      // }, err => {
      // });
    }



  }

  //function for user click on tournament profile

  clickOnTournamentProfile() {
    this.TournamentFormObj = this.storingTournamentProfileInformation;
    this.playersRegistrationobj.TournamentProfileForm = 1;
    this.playersRegistrationobj.TournamentProfile = true;
    this.playersRegistrationobj.publicProfile = false;
    this.playersRegistrationobj.TournamentFormerror = false;
  }

  //function for user click on public profile

  clickOnPublicProfile() {
    if(Object.keys(this.storingTournamentProfileInformation).length > 0){
    this.TournamentFormObj = this.storingPublicProfileFirstPhase;
    this.playersRegistrationobj.publicProfileForm = 1;
    this.playersRegistrationobj.TournamentProfile = false;
    this.playersRegistrationobj.publicProfile = true;
    this.playersRegistrationobj.TournamentFormerror = false;
    }
  }

  // //function for tournament Profile submit submit
  // publicProfilesubmit() {
  //   if (this.playersRegistrationobj.publicProfileForm === 1) {
  //     this.TournamentFormObj.PublicProfile1 = {};
  //     var PublicProfile1service = 0;
  //     if (this.TournamentFormObj.Swings !== undefined) {
  //       PublicProfile1service = 1;
  //       this.TournamentFormObj.PublicProfile1.Swings = this.TournamentFormObj.Swings;
  //     }
  //     if (this.TournamentFormObj.Hometown !== undefined) {
  //       PublicProfile1service = 1;
  //       this.TournamentFormObj.PublicProfile1.HomeTown = this.TournamentFormObj.Hometown;
  //     }
  //     if (this.TournamentFormObj.HomeClub !== undefined) {
  //       PublicProfile1service = 1;
  //       this.TournamentFormObj.PublicProfile1.HomeClub = this.TournamentFormObj.HomeClub;
  //     }
  //     if (this.TournamentFormObj.IndoorOutdoorPreference !== undefined) {
  //       PublicProfile1service = 1;
  //       this.TournamentFormObj.PublicProfile1.IndoorOutdoorPreference = this.TournamentFormObj.IndoorOutdoorPreference;
  //     }
  //     if (this.TournamentFormObj.FavoritePaddle !== undefined) {
  //       PublicProfile1service = 1;
  //       this.TournamentFormObj.PublicProfile1.FavoritePaddle = this.TournamentFormObj.FavoritePaddle;
  //     }
  //     if (this.TournamentFormObj.BeenPlaying !== undefined) {
  //       PublicProfile1service = 1;
  //       this.TournamentFormObj.PublicProfile1.BeenPlaying = this.TournamentFormObj.BeenPlaying;
  //     }
  //     if (PublicProfile1service === 1) {
  //       this.TournamentFormObj.PublicProfile1.token = this.storage.get('Player-Token');
  //       this.service.playerRegisterUpdate(this.TournamentFormObj.PublicProfile1).subscribe(response => {
  //         this.playersRegistrationobj.publicProfileForm++;
  //         this.playersRegistrationobj.TournamentFormerror = false;
  //         delete this.TournamentFormObj.PublicProfile1;
  //       }, err => {
  //       });
  //     } else {
  //       this.playersRegistrationobj.publicProfileForm++;
  //     }

  //   } else if (this.playersRegistrationobj.publicProfileForm === 2) {
  //     this.TournamentFormObj.PublicProfile2 = {};
  //     let PublicProfile2service = 0;
  //     if (this.TournamentFormObj.FavoriteFacility !== undefined) {
  //       PublicProfile2service = 1;
  //       this.TournamentFormObj.PublicProfile2.FavoriteFacility = this.TournamentFormObj.FavoriteFacility;
  //     }
  //     if (this.TournamentFormObj.FurthestLocation !== undefined) {
  //       PublicProfile2service = 1;
  //       this.TournamentFormObj.PublicProfile2.FurthestLocation = this.TournamentFormObj.FurthestLocation;
  //     }
  //     if (this.TournamentFormObj.MostProud !== undefined) {
  //       PublicProfile2service = 1;
  //       this.TournamentFormObj.PublicProfile2.MostProud = this.TournamentFormObj.MostProud;
  //     }
  //     if (this.TournamentFormObj.SinglesDoubles !== undefined) {
  //       PublicProfile2service = 1;
  //       this.TournamentFormObj.PublicProfile2.SinglesDoubles = this.TournamentFormObj.SinglesDoubles;
  //     }
  //     if (this.TournamentFormObj.MiscInformation !== undefined) {
  //       PublicProfile2service = 1;
  //       this.TournamentFormObj.PublicProfile2.MiscInformation = this.TournamentFormObj.MiscInformation;
  //     }
  //     if (PublicProfile2service === 1) {
  //       this.TournamentFormObj.PublicProfile2.token = this.storage.get('Player-Token');
  //       this.service.playerRegisterUpdate(this.TournamentFormObj.PublicProfile2).subscribe(response => {
  //         this.playersRegistrationobj.publicProfileForm++;
  //       }, err => {
  //       });
  //     } else {
  //       this.playersRegistrationobj.publicProfileForm++;
  //     }
  //   } else if (this.playersRegistrationobj.publicProfileForm === 3) {
  //     this.router.navigate(['/playerHomePage']);
  //     // this.service.PlayerRegister(this.TournamentFormObj).subscribe(response => {
  //     //   this.storage.set('Player-Token', response.token);
  //     //   this.playersRegistrationobj.TournamentProfile = false;
  //     //   this.playersRegistrationobj.publicProfile = true;
  //     //   this.TournamentFormObj = {};
  //     //   //page navigate one page to anyther page.
  //     //   this.router.navigate(['/playerHomePage']);
  //     //   // this.playersRegistrationobj.publicProfileForm = 1;
  //     // }, err => {
  //     // });
  //   }



  // }

}
