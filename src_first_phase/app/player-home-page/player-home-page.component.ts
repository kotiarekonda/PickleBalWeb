import { Component, OnInit } from '@angular/core';
import { commonServices } from '../app.commonservices';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, NavigationExtras } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MdDialogRef, MdDialog } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { AppService } from '../app.service';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-player-home-page',
  templateUrl: './player-home-page.component.html',
  styleUrls: ['./player-home-page.component.css'],
  providers: [commonServices, AppService, NavbarComponent]
})
export class PlayerHomePageComponent {
  playerHomePageobj: any = {};
  public arry: any[] = [];
  playerDetails: any = {};
  // upLoadFile: any;
  // bucket:any;
  // Utilities: any = {
  //   BUCKET: 'rootvinn',
  //   ACCESS_KEY: 'AKIAJL3CCLNKUOMI6HYA',
  //   SECRET_KEY: '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',
  //   REGION: 'ap-southeast-1',
  //   BASE_URL: 'https://s3-ap-southeast-1.amazonaws.com/rootvinn/',
  //   SERVER_SIDE_ENCRYPTION: 'AES256'
  // };
  // window: any = window;
  // AWS: any = this.window.AWS;

  constructor(public service: commonServices, public storage: LocalStorageService, public router: Router, public navbar: NavbarComponent, public dialog: MdDialog, public eventEmit: AppService) { }

  ngOnInit() {
    this.playerHomePageobj.showImage = false;
    this.playerHomePageobj.value = 0;
    //      this.bucket=new AWS.S3({
    //   params: {
    //     Bucket: this.Utilities.BUCKET
    //   }
    // });
    // AWS.config.update({
    //   accessKeyId: this.Utilities.ACCESS_KEY,
    //   secretAccessKey: this.Utilities.SECRET_KEY
    // });
    // this.AWS.config.region = this.Utilities.REGION;
    // $(window).on('load', function() { 
    //   $('#myCarousel').flexslider({
    //     animation: "slide",
    //     controlNav: false,
    //     animationLoop: false,
    //     slideshow: false,
    //     itemWidth: 210,
    //     itemMargin: 5,
    //     asNavFor: '#myCarousel'
    //   });

    //   $('#myCarousel').flexslider({
    //     animation: "slide",
    //     controlNav: false,
    //     animationLoop: false,
    //     slideshow: false,
    //     sync: "#myCarousel"
    //   });
    // });


    let token = this.storage.get('Player-Token');
    if (token !== undefined) {
      this.service.getPlayerDetails(token).subscribe(response => {
        this.playerDetails = response;
        // this.arry = response.Photos;
        // this.playerHomePageobj.removeImage = response.Photos[0];
        // this.carousel(0);
        //    let str=this.playerDetails.BirthDate;
        // let array:any=str.split('-');
        // console.log("array",array);
        // this.playerHomePageobj.DOBMonth=array[0];
        //  console.log("this.playerHomePageobj.DOBMonth",this.playerHomePageobj.DOBMonth);
        // this.playerHomePageobj.DOBDate=array[1];
        // console.log("this.playerHomePageobj.DOBDate",this.playerHomePageobj.DOBDate);
        // this.playerHomePageobj.DOBYear=array[2];
        // console.log("this.playerHomePageobj.DOBYear",this.playerHomePageobj.DOBYear);
        this.playerHomePageobj.PublicProfileLength = Object.keys(response.PublicProfile).length;
        this.playerHomePageobj.EditTournamentProfile = false;
        if (this.playerDetails.PublicProfile === undefined) {

        }

        // if (this.playerDetails.PublicProfile1 === undefined && this.playerDetails.PublicProfile2 === undefined) {
        //   this.playerHomePageobj.PublicProfile1 = {};
        //   this.playerHomePageobj.PublicProfile2 = {};
        // } else if (this.playerDetails.PublicProfile1 === undefined) {
        //   this.playerHomePageobj.PublicProfile1 = {};
        // } else if (this.playerDetails.PublicProfile2 === undefined) {
        //   this.playerHomePageobj.PublicProfile2 = {};
        // }
        // if (this.playerDetails.PublicProfile !== undefined) {
        //   this.playerHomePageobj.PublicProfile1 = this.playerDetails.PublicProfile1;
        //   this.playerHomePageobj.PublicProfile2 = this.playerDetails.PublicProfile2;
        // } else if (this.playerDetails.PublicProfile11 !== undefined) {
        //   this.playerHomePageobj.PublicProfile1 = this.playerDetails.PublicProfile1;
        // } else if (this.playerDetails.PublicProfile2 !== undefined) {
        //   this.playerHomePageobj.PublicProfile2 = this.playerDetails.PublicProfile2;
        // }
        this.playerHomePageobj.show = 1;
        this.playerHomePageobj.EditTournamentProfile1 = 0;
        this.playerHomePageobj.EditTournamentProfile2 = 0;
        this.playerHomePageobj.EditTournamentProfile3 = 0;
      }, err => {
        this.eventEmit.fire('logoutEvent');
        localStorage.clear();
        //page navigate one page to anyther page.
        this.router.navigate(['']);
      });
    }
    this.playerDetails.loadingProfileIcon=false;


  }

  phnoChange($event) {
    if ($event.keyCode === 8) {
      this.playerHomePageobj.EditTournamentform.Phone = this.playerHomePageobj.EditTournamentform.Phone.replace(/-/g, '');
    } else if (this.playerHomePageobj.EditTournamentform.Phone && this.playerHomePageobj.EditTournamentform.Phone.length === 10) {
      this.playerHomePageobj.EditTournamentform.Phone = this.playerHomePageobj.EditTournamentform.Phone.substr(0, 3) + '-' + this.playerHomePageobj.EditTournamentform.Phone.substr(3, 3) + '-' + this.playerHomePageobj.EditTournamentform.Phone.substr(6, 4)
    }
  }
  emgphnoChange($event) {
    if ($event.keyCode === 8) {
      this.playerHomePageobj.EditTournamentform.EmergencyContact = this.playerHomePageobj.EditTournamentform.EmergencyContact.replace(/-/g, '');
    } else if (this.playerHomePageobj.EditTournamentform.EmergencyContact && this.playerHomePageobj.EditTournamentform.EmergencyContact.length === 10) {
      this.playerHomePageobj.EditTournamentform.EmergencyContact = this.playerHomePageobj.EditTournamentform.EmergencyContact.substr(0, 3) + '-' + this.playerHomePageobj.EditTournamentform.EmergencyContact.substr(3, 3) + '-' + this.playerHomePageobj.EditTournamentform.EmergencyContact.substr(6, 4)
    }
  }
  tournmentprofile() {
    this.playerHomePageobj.show = 1;
    this.playerHomePageobj.AddPublicProfile = 0;
  }
  publicprofile() {
    this.playerHomePageobj.show = 2;
    this.playerHomePageobj.AddPublicProfile = 0;
    this.playerHomePageobj.EditTournamentProfile1 = 0;
    this.playerHomePageobj.EditTournamentProfile2 = 0;
    this.playerHomePageobj.EditTournamentProfile3 = 0;

  }
  photos() {
    this.playerHomePageobj.show = 3;
    this.playerHomePageobj.AddPublicProfile = 0;
    this.playerHomePageobj.EditTournamentProfile1 = 0;
    this.playerHomePageobj.EditTournamentProfile2 = 0;
    this.playerHomePageobj.EditTournamentProfile3 = 0;
  }


  carousel(index) {
    this.playerHomePageobj.cindex = index;
    // this.playerDetails.Photos[index].class='active';
  }
  //up Load Player Img

  upLoadPlayerImg(fileInput: any, arg) {
    if (arg === undefined) {
      this.playerDetails.loadingProfileIcon = true;
      let obj: any = {};
      obj.file = fileInput.target.files[0];
      obj.token = this.storage.get('Player-Token');
      this.service.uploadFileFunction(obj).subscribe(response => {
        if (this.playerDetails.PublicProfile && this.playerDetails.PublicProfile.ProfilePic !== undefined) {
          this.playerDetails.PublicProfile.ProfilePic = response.ProfilePic;
          this.playerDetails.loadingProfileIcon = false;
        } else {
          this.playerDetails.PublicProfile.ProfilePic = response.ProfilePic;
          this.playerDetails.loadingProfileIcon = false;
        }
        
      }, err => {
        this.playerDetails.loadingProfileIcon = false;
      });
    } else {
      this.playerDetails.loadingIcon = true;
      let obj: any = {};
      let array: any = fileInput.target.files;
      var formData: FormData = new FormData();
      for (var i = 0; array.length > i; i++) {
        formData.append('Photos[]', array[i]);
      }
      formData.append('key', "Photos");
      obj.formData = formData;
      obj.token = this.storage.get('Player-Token');
      this.service.playerRegisterUpdate(obj).subscribe(response => {

        this.playerDetails.Photos = response.Photos;
        this.playerDetails.loadingIcon = false;
        // this.router.navigate(['/playerHomePage']);
      }, err => {
        this.playerDetails.loadingIcon = false;
      });
    }
  }

  //method for generating unique path

  // uniqueString() {
  //   try {
  //     var text = '';
  //     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //     for (var i = 0; i < 8; i++) {
  //       text += possible.charAt(Math.floor(Math.random() * possible.length));
  //     }
  //     return text;
  //   } catch (e) { }
  // }

  // awsServerPicUpload(filesData) {
  //   var totalphotoscount = filesData.length;
  //   var uploadedphotoscount = 0;
  //   var photourls = [];
  //   for (var i = 0; i < filesData.length; i++) {
  //     var uniqueFileName = this.uniqueString() + '-' + filesData[i].name;
  //     var params = {
  //       Key: uniqueFileName,
  //       ContentType: filesData[i].type,
  //       Body: filesData[i],
  //       ServerSideEncryption: this.Utilities.SERVER_SIDE_ENCRYPTION
  //     };
  //     var newname = this.Utilities.S3.BASE_URL + uniqueFileName;

  //     photourls.push(newname);
  //     this.bucket.putObject(params, function (err) {
  //       if (err) {
  //         return false;
  //       } else {
  //         uploadedphotoscount++;
  //         if (totalphotoscount === uploadedphotoscount) {
  //           //  post.Photos = photourls;
  //         }
  //       }
  //     })
  //   }
  // }

  //creating bucket for uploading image into aws


  //function for get year.
  getYear() {
    var array = [];
    for (var i = 1960; i <= 2017; i++) {
      array.push(i);


    }
    return array;
  }


  editTournamentProfile(arg) {
    this.playerHomePageobj.EditTournamentform = {};
    if (arg === 1) {
      this.playerHomePageobj.EditTournamentform.FirstName = this.playerDetails.FirstName;
      this.playerHomePageobj.EditTournamentform.LastName = this.playerDetails.LastName;
      this.playerHomePageobj.EditTournamentform.email = this.playerDetails.email;
      this.playerHomePageobj.EditTournamentform.UserName = this.playerDetails.UserName;
      this.playerHomePageobj.EditTournamentform.Gender = this.playerDetails.Gender;
      this.playerHomePageobj.EditTournamentform.TShirtSize = this.playerDetails.TShirtSize;
      if (this.playerDetails.BirthDate !== undefined) {
        let str = this.playerDetails.BirthDate;
        let array: any = str.split('-');
        this.playerHomePageobj.EditTournamentform.DOBDate = array[0];
        this.playerHomePageobj.EditTournamentform.DOBMonth = array[1];
        this.playerHomePageobj.EditTournamentform.DOBYear = array[2];
      }
      this.playerHomePageobj.EditTournamentProfile1 = 1;
      this.playerHomePageobj.EditTournamentProfile2 = 0;
      this.playerHomePageobj.EditTournamentProfile3 = 0;


    } else if (arg === 2) {
      this.playerHomePageobj.EditTournamentform.Address1 = this.playerDetails.Address1;
      this.playerHomePageobj.EditTournamentform.Address2 = this.playerDetails.Address2;
      this.playerHomePageobj.EditTournamentform.City = this.playerDetails.City;
      this.playerHomePageobj.EditTournamentform.State = this.playerDetails.State;
      this.playerHomePageobj.EditTournamentform.Country = this.playerDetails.Country.slice();
      this.playerHomePageobj.EditTournamentform.PostalCode = this.playerDetails.PostalCode;
      this.playerHomePageobj.EditTournamentform.Phone = this.playerDetails.Phone;
      this.playerHomePageobj.EditTournamentform.EmergencyContactName = this.playerDetails.EmergencyContactName;
      this.playerHomePageobj.EditTournamentform.EmergencyContact = this.playerDetails.EmergencyContact;
      this.playerHomePageobj.EditTournamentProfile2 = 1;
      this.playerHomePageobj.EditTournamentProfile3 = 0;
      this.playerHomePageobj.EditTournamentProfile1 = 0;
      //service for get all counties.
      this.service.allcountries().subscribe(response => {
        this.playerHomePageobj.countries = response;
        this.countrybasedstates();
      }, err => {
      });
    } else if (arg === 3) {
      this.playerHomePageobj.EditTournamentform.Club = this.playerDetails.Club;
      this.playerHomePageobj.EditTournamentform.SinglesSkillLevel = this.playerDetails.SinglesSkillLevel;
      this.playerHomePageobj.EditTournamentform.DoublesSkillLevel = this.playerDetails.DoublesSkillLevel;
      this.playerHomePageobj.EditTournamentform.USAPAMemberNumber = this.playerDetails.USAPAMemberNumber;
      this.playerHomePageobj.EditTournamentProfile3 = 1;
      this.playerHomePageobj.EditTournamentProfile2 = 0;
      this.playerHomePageobj.EditTournamentProfile1 = 0;
    } else if (arg === 4) {
      if (this.playerHomePageobj.PublicProfileLength !== 0) {
        if (this.playerDetails.PublicProfile.FavoriteFacility) {
          this.playerDetails.FavoriteFacilitycount = 300 - this.playerDetails.PublicProfile.FavoriteFacility.length;
        }
        if (this.playerDetails.PublicProfile.FurthestLocation) {
          this.playerDetails.FurthestLocationcount = 300 - this.playerDetails.PublicProfile.FurthestLocation.length;
        }
        if (this.playerDetails.PublicProfile.MostProud) {
          this.playerDetails.MostProudcount = 300 - this.playerDetails.PublicProfile.MostProud.length;
        }
        if (this.playerDetails.PublicProfile.SinglesDoubles) {
          this.playerDetails.SinglesDoublescount = 300 - this.playerDetails.PublicProfile.SinglesDoubles.length;
        }
        if (this.playerDetails.PublicProfile.MiscInformation) {
          this.playerDetails.MiscInformationcount = 300 - this.playerDetails.PublicProfile.MiscInformation.length;
        }
      }
      this.playerHomePageobj.AddPublicProfile = 1;

    }

  }


  //get all countries
  // getcountries(){
  //   this.service.allcountries().subscribe(response => {
  //       this.playerHomePageobj.countries = response;
  //     }, err => {
  //   });
  // }


  //countryid based state service call
  countrybasedstates() {

    let index = this.playerHomePageobj.countries.map(function (obj) { return obj.Country; }).indexOf(this.playerHomePageobj.EditTournamentform.Country);
    let id = this.playerHomePageobj.countries[index]._id;
    this.service.countrybasedstatedetails(id).subscribe(response => {
      this.playerHomePageobj.states = response;
      if (this.playerHomePageobj.EditTournamentform.Country !== this.playerDetails.Country) {
        this.playerHomePageobj.EditTournamentform.State = '';
      } else {
        this.playerHomePageobj.EditTournamentform.State = this.playerDetails.State;
      }
      // delete this.TournamentFormObj.State;
    }, err => {
    });
  }

  //save save Tournament edit data.
  saveTournamenteditdata(arg) {
    if (arg === 1) {
      this.playerHomePageobj.tournamentLoadingIcon=true;
      let obj: any = {};
      obj.FirstName = this.playerHomePageobj.EditTournamentform.FirstName;
      obj.LastName = this.playerHomePageobj.EditTournamentform.LastName;
      obj.email = this.playerHomePageobj.EditTournamentform.email;
      obj.UserName = this.playerHomePageobj.EditTournamentform.UserName;
      obj.Gender = this.playerHomePageobj.EditTournamentform.Gender;
      obj.TShirtSize = this.playerHomePageobj.EditTournamentform.TShirtSize;
      if (this.playerHomePageobj.EditTournamentform.DOBMonth === "select Month") {
      } else if (this.playerHomePageobj.EditTournamentform.DOBDate === "select Date") {
      } else if (this.playerHomePageobj.EditTournamentform.DOBYear === "select Year") {
      } else {
        obj.BirthDate = this.playerHomePageobj.EditTournamentform.DOBDate + '-' + this.playerHomePageobj.EditTournamentform.DOBMonth + '-' + this.playerHomePageobj.EditTournamentform.DOBYear;
      }
      // obj.BirthDate = this.playerHomePageobj.EditTournamentform.BirthDate;
      obj.token = this.storage.get('Player-Token');
      this.updateServiceCall(obj, 1);
    } else if (arg === 2) {
       this.playerHomePageobj.tournamentLoadingIcon=true;
      let obj: any = {};
      obj.Address1 = this.playerHomePageobj.EditTournamentform.Address1;
      obj.Address2 = this.playerHomePageobj.EditTournamentform.Address2;
      obj.City = this.playerHomePageobj.EditTournamentform.City;
      obj.State = this.playerHomePageobj.EditTournamentform.State;
      obj.Country = this.playerHomePageobj.EditTournamentform.Country;
      obj.PostalCode = this.playerHomePageobj.EditTournamentform.PostalCode;
      obj.EmergencyContactName = this.playerHomePageobj.EditTournamentform.EmergencyContactName;
      obj.token = this.storage.get('Player-Token');
      obj.validPhoneNo = this.playerHomePageobj.EditTournamentform.Phone.replace(/-/g, '');
      obj.validEmergencyContactNo = this.playerHomePageobj.EditTournamentform.EmergencyContact.replace(/-/g, '');
      if (obj.validPhoneNo.length !== 10 || obj.validEmergencyContactNo.length !== 10) {
        this.playerHomePageobj.TournamentFormerror=true;
        this.playerHomePageobj.TournamentFormerrormsg="Please Enter Valid Phone Number"
      } else {
        this.playerHomePageobj.TournamentFormerror=false;
        obj.Phone = this.playerHomePageobj.EditTournamentform.Phone;
        obj.EmergencyContact = this.playerHomePageobj.EditTournamentform.EmergencyContact;
        this.updateServiceCall(obj, 2);
      }

    } else if (arg === 3) {
       this.playerHomePageobj.tournamentLoadingIcon=true;
      let obj: any = {};
      obj.Club = this.playerHomePageobj.EditTournamentform.Club;
      obj.SinglesSkillLevel = this.playerHomePageobj.EditTournamentform.SinglesSkillLevel;
      obj.DoublesSkillLevel = this.playerHomePageobj.EditTournamentform.DoublesSkillLevel;
      obj.USAPAMemberNumber = this.playerHomePageobj.EditTournamentform.USAPAMemberNumber;
      obj.token = this.storage.get('Player-Token');
      this.updateServiceCall(obj, 3);
    } else if (arg === 4) {
       this.playerHomePageobj.tournamentLoadingIcon=true;
      let obj: any = {};

      var PublicProfile1service = 0;
      if (this.playerDetails.PublicProfile.Swings !== undefined) {
        PublicProfile1service = 1;
        obj.Swings = this.playerDetails.PublicProfile.Swings;
      }
      if (this.playerDetails.PublicProfile.HomeTown !== undefined) {
        PublicProfile1service = 1;
        obj.HomeTown = this.playerDetails.PublicProfile.HomeTown;
      }
      if (this.playerDetails.PublicProfile.HomeClub !== undefined) {
        PublicProfile1service = 1;
        obj.HomeClub = this.playerDetails.PublicProfile.HomeClub;
      }
      if (this.playerDetails.PublicProfile.SponsoredClub !== undefined) {
        PublicProfile1service = 1;
        obj.SponsoredClub = this.playerDetails.PublicProfile.SponsoredClub;
      }
      if (this.playerDetails.PublicProfile.IndoorOutdoorPreference !== undefined) {
        PublicProfile1service = 1;
        obj.IndoorOutdoorPreference = this.playerDetails.PublicProfile.IndoorOutdoorPreference;
      }
      if (this.playerDetails.PublicProfile.FavoritePaddle !== undefined) {
        PublicProfile1service = 1;
        obj.FavoritePaddle = this.playerDetails.PublicProfile.FavoritePaddle;
      }
      if (this.playerDetails.PublicProfile.BeenPlaying !== undefined) {
        PublicProfile1service = 1;
        obj.BeenPlaying = this.playerDetails.PublicProfile.BeenPlaying;
      }

      if (this.playerDetails.PublicProfile.FavoriteFacility !== undefined) {
        PublicProfile1service = 1;
        obj.FavoriteFacility = this.playerDetails.PublicProfile.FavoriteFacility;
      }
      if (this.playerDetails.PublicProfile.FurthestLocation !== undefined) {
        PublicProfile1service = 1;
        obj.FurthestLocation = this.playerDetails.PublicProfile.FurthestLocation;
      }
      if (this.playerDetails.PublicProfile.MostProud !== undefined) {
        PublicProfile1service = 1;
        obj.MostProud = this.playerDetails.PublicProfile.MostProud;
      }
      if (this.playerDetails.PublicProfile.SinglesDoubles !== undefined) {
        PublicProfile1service = 1;
        obj.SinglesDoubles = this.playerDetails.PublicProfile.SinglesDoubles;
      }
      if (this.playerDetails.PublicProfile.MiscInformation !== undefined) {
        PublicProfile1service = 1;
        obj.MiscInformation = this.playerDetails.PublicProfile.MiscInformation;
      }
      // obj.PublicProfile1.HomeTown = this.playerDetails.PublicProfile.Hometown;
      // obj.PublicProfile1.Swings = this.playerHomePageobj.PublicProfile.Swings;
      // obj.PublicProfile1.HomeClub = this.playerHomePageobj.PublicProfile.HomeClub;
      // obj.PublicProfile1.IndoorOutdoorPreference = this.playerHomePageobj.PublicProfile1.IndoorOutdoorPreference;
      // obj.PublicProfile1.FavoritePaddle = this.playerHomePageobj.PublicProfile.FavoritePaddle;
      // obj.PublicProfile1.BeenPlaying = this.playerHomePageobj.PublicProfile.BeenPlaying;
      // obj.PublicProfile2.FavoriteFacility = this.playerHomePageobj.PublicProfile.FavoriteFacility;
      // obj.PublicProfile2.FurthestLocation = this.playerHomePageobj.PublicProfile.FurthestLocation;
      // obj.PublicProfile2.MostProud = this.playerHomePageobj.PublicProfile.MostProud;
      // obj.PublicProfile2.SinglesDoubles = this.playerHomePageobj.PublicProfile.SinglesDoubles;
      // obj.PublicProfile2.MiscInformation = this.playerHomePageobj.PublicProfile.MiscInformation;
      if (PublicProfile1service === 1) {
        obj.token = this.storage.get('Player-Token');
        this.updateServiceCall(obj, 4);
      } else {
        this.playerHomePageobj.AddPublicProfile = 0;
      }


    }
  }

  updateServiceCall(obj, arg) {
    this.service.tournamentplayerDetailseUpdate(obj).subscribe(response => {
       this.playerHomePageobj.tournamentLoadingIcon=false;
      if (arg === 4) {
        this.playerHomePageobj.PublicProfileLength = Object.keys(response.PublicProfile).length
      }
      this.playerDetails = response;
      this.CancelEditTournament(arg);
    }, err => {
    });
  }

  //fuction for Favorite facility textarea.
  FavoriteFacility() {

    if (this.playerDetails.PublicProfile.FavoriteFacility.length !== 0) {
      this.playerDetails.FavoriteFacilitycount = 300 - this.playerDetails.PublicProfile.FavoriteFacility.length;
    } else {
      this.playerDetails.FavoriteFacilitycount = 0;
    }
  }

  //function for Furthest Location textarea.
  FurthestLocation() {
    if (this.playerDetails.PublicProfile.FurthestLocation.length !== 0) {
      this.playerDetails.FurthestLocationcount = 300 - this.playerDetails.PublicProfile.FurthestLocation.length;
    } else {
      this.playerDetails.FurthestLocationcount = 0;
    }
  }

  //function for most Proud textarea.
  mostProud() {
    if (this.playerDetails.PublicProfile.length !== 0) {
      this.playerDetails.MostProudcount = 300 - this.playerDetails.PublicProfile.MostProud.length;
    } else {
      this.playerDetails.MostProudcount = 0;
    }

  }

  //function for Singles Or Doubles textarea.
  SinglesOrDoubles() {
    if (this.playerDetails.PublicProfile.length !== 0) {
      this.playerDetails.SinglesDoublescount = 300 - this.playerDetails.PublicProfile.SinglesDoubles.length;
    } else {
      this.playerDetails.FurthestLocationcount = 0;
    }
  }

  //function for Misc Information textarea.
  MiscInformation() {
    if (this.playerDetails.PublicProfile.MiscInformation.length !== 0) {
      this.playerDetails.MiscInformationcount = 300 - this.playerDetails.PublicProfile.MiscInformation.length;
    } else {
      this.playerDetails.MiscInformationcount = 0;
    }
  }

  //logout button and move to home page
  LogOut() {

    //emitting an event for showing logout login buttons in navbar component

    //cleare locale storage.
    localStorage.clear();
    this.router.navigate(['/']);

  }
  //Cancel Edit Tournament profile.
  CancelEditTournament(arg) {
    if (arg === 1) {
      this.playerHomePageobj.EditTournamentProfile1 = 0;
    } else if (arg === 2) {
      this.playerHomePageobj.EditTournamentProfile2 = 0;
    } else if (arg === 3) {
      this.playerHomePageobj.EditTournamentProfile3 = 0;
    } else if (arg === 4) {
      this.playerHomePageobj.AddPublicProfile = 0;
    }
    // this.playerHomePageobj.EditTournamentProfile = false;
  }
  //function for player delete Imgs 
  DeleteImgs(arg) {
    let obj: any = {};
    obj.ImagePath = [];
    obj.ImagePath[0] = arg;
    obj.token = this.storage.get('Player-Token');
    this.service.playerPhots(obj).subscribe(response => {
      let index = this.playerDetails.Photos.map(function (url) { return url; }).indexOf(arg);
      this.playerDetails.Photos.splice(index, 1);
    }, err => {
    });

  }



  //function for player Rgistration Form move to Next.
  // playerRgistrationFormNext() {
  //   this.playerHomePageobj.EditTournamentProfileform++;
  // }
  // publicProfileFormNext() {
  //   this.playerHomePageobj.publicProfileForm++;
  // }

  //function for player Rgistration Form move to Back.
  // playerRgistrationFormBack() {
  //   this.playerHomePageobj.EditTournamentProfileform--;
  // }

  //function for click player Details button.
  // TournamentFormOpstion(arg) {
  //   this.playerHomePageobj.EditTournamentProfileform = arg;
  // }

  //Add Details InPublic Profile.
  // AddDetailsInPublicProfile() {
  //   this.playerHomePageobj.publicProfileopstions = 1;
  //   this.playerHomePageobj.AddPublicProfile = 1;
  // }
  //publicProfileopstions.
  // publicProfileopstions(arg) {
  //   this.playerHomePageobj.publicProfileopstions = arg;
  // }
  //edit tournament Profile submit functionality.
  // tournamentProfilesubmit(obj) {
  //   obj.BirthDate = this.playerHomePageobj.EditTournamentform.DOBDate + '-' + this.playerHomePageobj.EditTournamentform.DOBMonth + '-' + this.playerHomePageobj.EditTournamentform.DOBYear;
  //   obj.token = this.storage.get('Player-Token');
  //   this.service.tournamentplayerDetailseUpdate(obj).subscribe(response => {
  //     this.playerDetails = response;
  //     this.playerHomePageobj.EditTournamentProfile = false;
  //   }, err => {
  //   });
  // }
  //Cancel Edit Public Profile.
  // CancelEditPublicProfile() {
  //   this.playerHomePageobj.AddPublicProfile = 0;
  // }


  //submit publicProfile1 one form.
  // publicProfile1(obj) {
  //   obj.token = this.storage.get('Player-Token');
  //   this.service.playerRegisterUpdate(obj).subscribe(response => {
  //     this.playerDetails.PublicProfile1 = this.playerHomePageobj.PublicProfile1;
  //     this.playerHomePageobj.publicProfileopstions++;
  //   }, err => {
  //   });
  // }

  //submit publicProfile2 one form.
  // publicProfile2(obj) {
  //   obj.token = this.storage.get('Player-Token');
  //   this.service.playerRegisterUpdate(obj).subscribe(response => {
  //     this.playerDetails.PublicProfile2 = this.playerHomePageobj.PublicProfile2;
  //     this.playerHomePageobj.AddPublicProfile = 0;
  //   }, err => {
  //   });
  // }

  //function for get year.
  // getYear() {
  //   var array = [];
  //   for (var i = 1960; i <= 2010; i++) {
  //     array.push(i);


  //   }
  //   return array;
  // }


  //Edit Tournament Profile.
  // EditTournamentProfile() {
  //   let string = this.playerDetails.BirthDate
  //   let array = string.split('-');

  //   this.playerHomePageobj.EditTournamentform = {};
  //   this.playerHomePageobj.EditTournamentform.DOBDate = array[0];
  //   this.playerHomePageobj.EditTournamentform.DOBMonth = array[1];
  //   this.playerHomePageobj.EditTournamentform.DOBYear = array[2];
  //   this.playerHomePageobj.EditTournamentform.FirstName = this.playerDetails.FirstName;
  //   this.playerHomePageobj.EditTournamentform.LastName = this.playerDetails.LastName;
  //   this.playerHomePageobj.EditTournamentform.email = this.playerDetails.email;
  //   this.playerHomePageobj.EditTournamentform.UserName = this.playerDetails.UserName;
  //   this.playerHomePageobj.EditTournamentform.BirthDate = this.playerDetails.BirthDate;
  //   this.playerHomePageobj.EditTournamentform.Address1 = this.playerDetails.Address1;
  //   this.playerHomePageobj.EditTournamentform.Address2 = this.playerDetails.Address2;
  //   this.playerHomePageobj.EditTournamentform.City = this.playerDetails.City;
  //   this.playerHomePageobj.EditTournamentform.State = this.playerDetails.State;
  //   this.playerHomePageobj.EditTournamentform.Country = this.playerDetails.Country;
  //   this.playerHomePageobj.EditTournamentform.PostalCode = this.playerDetails.PostalCode;
  //   this.playerHomePageobj.EditTournamentform.Phone = this.playerDetails.Phone;
  //   this.playerHomePageobj.EditTournamentform.EmergencyContactName = this.playerDetails.EmergencyContactName;
  //   this.playerHomePageobj.EditTournamentform.EmergencyContact = this.playerDetails.EmergencyContact;
  //   this.playerHomePageobj.EditTournamentform.Club = this.playerDetails.Club;
  //   this.playerHomePageobj.EditTournamentform.SkillLevel = this.playerDetails.SkillLevel;
  //   this.playerHomePageobj.EditTournamentform.SkillRatingBy = this.playerDetails.SkillRatingBy;
  //   this.playerHomePageobj.EditTournamentform.USAPAMemberNumber = this.playerDetails.USAPAMemberNumber;
  //   this.playerHomePageobj.EditTournamentProfile = true;
  //   this.playerHomePageobj.EditTournamentProfileform = 1;
  // }

}
