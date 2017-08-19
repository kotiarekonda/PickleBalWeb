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
    }, 500);
    // $window.storage.clear();
    // this.storage.Clear();
    //  localStorage.clear();
    //page navigate one page to anyther page.
    // this.router.navigate(['/playerHomePage']);


    // this.playersRegistrationobj.publicProfileForm = 1;
    // this.playersRegistrationobj.publicProfile = true;

    this.playersRegistrationobj.TournamentProfile = true;
    this.playersRegistrationobj.TournamentProfileForm = 1;
    // this.TournamentFormObj.State = "Select State";
    this.TournamentFormObj.Country = "United States";
    this.TournamentFormObj.DOBMonth = "MM";
    this.TournamentFormObj.DOBDate = "DD";
    this.TournamentFormObj.DOBYear = "YYYY";
    this.TournamentFormObj.SinglesSkillLevel = "Select Skill Level";
    this.TournamentFormObj.Gender = "Select Gender";
    this.TournamentFormObj.TShirtSize = "Select T Shirt Size";
    this.TournamentFormObj.DoublesSkillLevel = "Select Skill Level";
    // this.TournamentFormObj.Swings = "Select Swings";
  }

  //function for userName Validastion
  userNameValidastion() {
    this.playersRegistrationobj.userName;
    if (this.TournamentFormObj.UserName && this.TournamentFormObj.UserName.length > 4 && this.TournamentFormObj.UserName.length < 20) {
      this.playersRegistrationobj.userName = true;
    } else {
      this.playersRegistrationobj.userName = false;
    }
  }
  //function for password validations.
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
      this.playersRegistrationobj.FavoriteFacilitycount = 300 - this.TournamentFormObj.FavoriteFacility.length;
    } else {
      this.playersRegistrationobj.FavoriteFacilitycount = 0;
    }
  }
  //function for Furthest Location textarea.
  FurthestLocation() {
    if (this.TournamentFormObj.FurthestLocation.length !== 0) {
      this.playersRegistrationobj.FurthestLocationcount = 300 - this.TournamentFormObj.FurthestLocation.length;
    } else {
      this.playersRegistrationobj.FurthestLocationcount = 0;
    }
  }
  //function for most Proud textarea.
  mostProud() {
    if (this.TournamentFormObj.MostProud.length !== 0) {
      this.playersRegistrationobj.MostProudcount = 300 - this.TournamentFormObj.MostProud.length;
    } else {
      this.playersRegistrationobj.MostProudcount = 0;
    }

  }
  //function for Singles Or Doubles textarea.
  SinglesOrDoubles() {
    if (this.TournamentFormObj.SinglesDoubles.length !== 0) {
      this.playersRegistrationobj.SinglesDoublescount = 300 - this.TournamentFormObj.SinglesDoubles.length;
    } else {
      this.playersRegistrationobj.FurthestLocationcount = 0;
    }
  }

  //function for Misc Information textarea.
  MiscInformation() {
    if (this.TournamentFormObj.MiscInformation.length !== 0) {
      this.playersRegistrationobj.MiscInformationcount = 300 - this.TournamentFormObj.MiscInformation.length;
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

  phnoChange($event) {
    if (this.playersRegistrationobj.phoneNo && this.playersRegistrationobj.phoneNo === true && $event.keyCode === 8) {
      this.TournamentFormObj.Phone = this.TournamentFormObj.Phone.replace(/-/g, '');
      // this.TournamentFormObj.Phone=this.TournamentFormObj.Phone.slice(0,-1);
      this.playersRegistrationobj.phoneNo = false;
    } else if (this.TournamentFormObj.Phone && this.TournamentFormObj.Phone.length === 10 && this.playersRegistrationobj.phoneNo === false) {
      this.TournamentFormObj.Phone = this.TournamentFormObj.Phone.slice(0, 3) + '-' + this.TournamentFormObj.Phone.slice(3, 6) + '-' + this.TournamentFormObj.Phone.substr(6, 10);
      this.playersRegistrationobj.phoneNo = true;
    } else if (this.TournamentFormObj.Phone && this.TournamentFormObj.Phone.length <= 10) {
      this.playersRegistrationobj.phoneNo = false;
    }
    // if(this.playersRegistrationobj.phoneNo && this.playersRegistrationobj.phoneNo===true){
    //   co
    //   this.TournamentFormObj.Phone=this.TournamentFormObj.Phone.slice('-');
    //   this.TournamentFormObj.Phone=this.TournamentFormObj.Phone.slice(0,-1);
    //   this.playersRegistrationobj.phoneNo=false;
    // }
  }
  emgphnoChange($event) {
    if (this.playersRegistrationobj.EmergencyphoneNo && this.playersRegistrationobj.EmergencyphoneNo === true && $event.keyCode === 8) {
      this.TournamentFormObj.EmergencyContact = this.TournamentFormObj.EmergencyContact.replace(/-/g, '');
      // this.TournamentFormObj.EmergencyContact=this.TournamentFormObj.EmergencyContact.slice(0,-1);
      this.playersRegistrationobj.EmergencyphoneNo = false;
    } else if (this.TournamentFormObj.EmergencyContact && this.TournamentFormObj.EmergencyContact.length === 10 && this.playersRegistrationobj.EmergencyphoneNo === false) {
      this.TournamentFormObj.EmergencyContact = this.TournamentFormObj.EmergencyContact.slice(0, 3) + '-' + this.TournamentFormObj.EmergencyContact.slice(3, 6) + '-' + this.TournamentFormObj.EmergencyContact.slice(6, 10);
      this.playersRegistrationobj.EmergencyphoneNo = true;
    } else if (this.TournamentFormObj.EmergencyContact && this.TournamentFormObj.EmergencyContact.length <= 10) {
      this.playersRegistrationobj.EmergencyphoneNo = false;
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
    if (this.playersRegistrationobj.countries.length === 0) {
      //  this.getCountryStatesDefault();
      this.getcountries();
    }

    if (this.playersRegistrationobj.TournamentProfileForm === 1) {

      // if (this.TournamentFormObj.DOBMonth === "MM") {
      //   this.TournamentFormerror('Please Fill All Required Fields');
      // } else if (this.TournamentFormObj.DOBDate === "DD") {
      // } else if (this.TournamentFormObj.DOBYear === "YYYY") {
      // } else {

      // }

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
      } else if (this.TournamentFormObj.DOBMonth === "MM") {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.DOBDate === "DD") {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.DOBYear === "YYYY") {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else {
        this.TournamentFormObj.BirthDate = this.TournamentFormObj.DOBDate + '-' + this.TournamentFormObj.DOBMonth + '-' + this.TournamentFormObj.DOBYear;
        if (this.TournamentFormObj.email !== undefined) {
          var atpos = this.TournamentFormObj.email.indexOf("@");
          var dotpos = this.TournamentFormObj.email.lastIndexOf(".");
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.TournamentFormObj.email.length) {
            this.TournamentFormerror('Please Enter Valid E-Mail Address');
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

      // else if (this.TournamentFormObj.State === undefined || this.TournamentFormObj.State === "Select State") {
      //   this.TournamentFormerror('Please Fill All Required Fields');
      // }

    } else if (this.playersRegistrationobj.TournamentProfileForm === 2) {
      if (this.TournamentFormObj.Address1 === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.City === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.PostalCode === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.playersRegistrationobj.states.length !== 0 && this.TournamentFormObj.State === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.Country === undefined || this.TournamentFormObj.Country === "Select Country") {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.playersRegistrationobj.phoneNo === undefined || this.playersRegistrationobj.phoneNo === false) {
        this.TournamentFormerror('Please Enter Valid Phone Number');
      } else if (this.playersRegistrationobj.EmergencyphoneNo === undefined || this.playersRegistrationobj.EmergencyphoneNo === false) {
        this.TournamentFormerror('Please Enter Valid Phone Number');
      } else if (this.TournamentFormObj.EmergencyContact === undefined) {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else {
        this.playersRegistrationobj.TournamentFormerror = false;
        this.playersRegistrationobj.TournamentProfileForm++;
      }
    }

    //scroll move to top when goto next or save 
    window.scrollTo(0, 0);
    // this.playersRegistrationobj.TournamentProfileForm++;
  }
  //Tournament Forme showing rror.
  TournamentFormerror(str) {
    this.playersRegistrationobj.TournamentFormerrormsg = str;
    this.playersRegistrationobj.TournamentFormerror = true;
  }
  publicProfileFormNext() {

    this.playersRegistrationobj.publicProfileForm++;
    //scroll move to top when goto next or save 
    window.scrollTo(0, 0);
  }

  deleteProfile(){
    this.TournamentFormObj.ProfilePic =undefined;
     this.TournamentFormObj.picname=undefined;
  }

  //function for player file up load function.
  upLoadPlayerImg(fileInput: any) {
    this.TournamentFormObj.ProfilePic = fileInput.target.files;
    let reader: FileReader = new FileReader();
    let file: any = fileInput.target.files[0]
    this.TournamentFormObj.picname=reader.readAsDataURL(file);
    reader.onload = (e) => {
      let csv: string = reader.result;
      this.TournamentFormObj.picname = csv;
    }
  }
  upLoadPlayerImgmul(fileInput: any) {
    this.TournamentFormObj.ProfilePic = fileInput.target.files;
    this.TournamentFormObj.picLength = fileInput.target.files.length;
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
    if (this.playersRegistrationobj.countries.length === 0) {
      // this.getCountryStatesDefault();
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
    //scroll move to top when goto next or save 
    window.scrollTo(0, 0);
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
    if (this.TournamentFormObj.email && this.TournamentFormObj.UserName && this.TournamentFormObj.password && this.TournamentFormObj.DOBDate) {
      if (this.TournamentFormObj.SinglesSkillLevel === undefined || this.TournamentFormObj.State === "Select Skill Level") {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else if (this.TournamentFormObj.DoublesSkillLevel === undefined || this.TournamentFormObj.DoublesSkillLevel === "Select Skill Level") {
        this.TournamentFormerror('Please Fill All Required Fields');
      } else {
        this.playersRegistrationobj.tournamentloadingIcon = true;
        // let string1 = this.TournamentFormObj.BirthDate;
        // let array1 = string1.toString().split(' ');
        // this.TournamentFormObj.BirthDate = array1[1] + "-" + array1[2] + "-" + array1[3];
        this.playersRegistrationobj.TournamentFormerror = false;
        // if(Object.keys(this.TournamentFormObj.Country)){
        //    this.playersRegistrationobj.Country1=this.TournamentFormObj.Country;
        //   this.TournamentFormObj.Country = this.TournamentFormObj.Country.Country;
        // }
        if (this.TournamentFormObj.State === undefined && this.playersRegistrationobj.states.length === 0) {
          delete this.TournamentFormObj.State;
        }
        this.TournamentFormObj.role = 'Player';
        this.storingTournamentProfileInformation = this.TournamentFormObj;
        this.service.PlayerRegister(this.TournamentFormObj).subscribe(response => {
          this.playersRegistrationobj.tournamentloadingIcon = false;
          this.storage.set('Player-Token', response.token);
          // this.TournamentFormObj.Country=this.TournamentFormObj.Country1;
          // delete this.playersRegistrationobj.Country1;
          this.playersRegistrationobj.TournamentProfile = false;
          this.playersRegistrationobj.publicProfile = true;
          this.TournamentFormObj = {};
          this.playersRegistrationobj.publicProfileForm = 1;
        }, err => {
          this.playersRegistrationobj.tournamentloadingIcon = false;
          this.TournamentFormerror(JSON.parse(err._body));
        });
      }
    } else {
      this.TournamentFormerror('Please Fill All Required Fields');
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



  //get all countries
  getcountries() {
    this.service.allcountries().subscribe(response => {
      this.playersRegistrationobj.countries = response;
      this.countrybasedstates();
    }, err => {
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
        this.playersRegistrationobj.PublicloadingIcon = true;
        formData.append('key', "PublicProfile1");
        this.TournamentFormObj.PublicProfile1.formData = formData;
        this.storingPublicProfileFirstPhase = this.TournamentFormObj;
        this.TournamentFormObj.PublicProfile1.token = this.storage.get('Player-Token');
        delete this.TournamentFormObj.ProfilePic;

        this.service.playerRegisterUpdate(this.TournamentFormObj.PublicProfile1).subscribe(response => {
          this.playersRegistrationobj.PublicloadingIcon = false;
          this.playersRegistrationobj.publicProfileForm++;
          this.playersRegistrationobj.TournamentFormerror = false;
          delete this.TournamentFormObj.PublicProfile1;
        }, err => {
          this.playersRegistrationobj.PublicloadingIcon = false;
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
        this.playersRegistrationobj.PublicloadingIcon = true;
        this.storingPublicProfileSecondPhase = this.TournamentFormObj;
        this.TournamentFormObj.PublicProfile2.token = this.storage.get('Player-Token');
        this.TournamentFormObj.PublicProfile2.key = "PublicProfile2";
        this.service.playerRegisterUpdate(this.TournamentFormObj.PublicProfile2).subscribe(response => {
          this.playersRegistrationobj.PublicloadingIcon = false;
          this.playersRegistrationobj.publicProfileForm++;
        }, err => {
          this.playersRegistrationobj.PublicloadingIcon = false;
        });
      } else {
        this.playersRegistrationobj.publicProfileForm++;
      }
    } else if (this.playersRegistrationobj.publicProfileForm === 3) {
      if (this.TournamentFormObj.ProfilePic !== undefined) {
        this.playersRegistrationobj.PublicloadingIcon = true;
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
          this.playersRegistrationobj.PublicloadingIcon = false;
          this.storingTournamentProfileInformation = {};
          this.storingPublicProfileFirstPhase = {};
          this.storingPublicProfileSecondPhase = {};
          this.storingPublicProfileThirdPhase = {};
          this.router.navigate(['/playerHomePage']);
          this.eventEmit.fire(`registrationCompleted`);
        }, err => {
          this.playersRegistrationobj.PublicloadingIcon = false;
        });
      } else {
        this.eventEmit.fire(`registrationCompleted`);
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


  //countryid based state service call
  countrybasedstates() {
    let index = this.playersRegistrationobj.countries.map(function (obj) { return obj.Country; }).indexOf(this.TournamentFormObj.Country);
    let id = this.playersRegistrationobj.countries[index]._id;
    this.service.countrybasedstatedetails(id).subscribe(response => {
      this.playersRegistrationobj.states = response;
      delete this.TournamentFormObj.State;
    }, err => {
    });
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
    if (Object.keys(this.storingTournamentProfileInformation).length > 0) {
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
