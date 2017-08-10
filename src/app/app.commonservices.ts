import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class commonServices {
  // path = "http://www.rootwinn.com:9005"; //server point.
  path = "http://localhost:9000"; //local point.
  playerobj: any = {};
  constructor(public http: Http) { }

  ngOnInit() {
  }

  //Player Register service for pickle ball.
  PlayerRegister(obj) {
    let response = this.http.post(this.path + '/api/Users', obj).map(response => response.json());
    return response;
  }

  //player Register up date service for pickle ball.
  playerRegisterUpdate(obj) {

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + obj.token);
    delete obj.token;
    var tempobj: any;
    tempobj = obj;
    if (obj.formData !== undefined) {
      tempobj = obj.formData;
    } else {
      headers.append('Content-Type', 'application/json');
      tempobj = obj;
    }
    let options = new RequestOptions({ headers: headers });
    let response = this.http.put(this.path + '/api/Users/updatepublicprofile', tempobj, options).map(response => response.json());
    return response;
  }

  // SignInShow(){
  //   let naresh="retrwrr";
  // }
  //playerSignIn service.
  playerSignIn(obj) {
    let response = this.http.post(this.path + '/auth/local', obj).map(response => response.json());
    return response;
  }
  //Get player all Details
  getPlayerDetails(str) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + str);
    let options = new RequestOptions({ headers: headers });
    let obj: any = {};
    let response = this.http.get(this.path + '/api/Users/playerprofile', options).map(response => response.json());
    return response;

  }

  //tournament player Detailse Update.
  tournamentplayerDetailseUpdate(obj) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + obj.token);
    let options = new RequestOptions({ headers: headers });
    delete obj.token;

    let response = this.http.put(this.path + '/api/Users/userprofile', obj, options).map(response => response.json());
    return response;
  }
  //search pickle ball Player.
  searchPlayer(obj) {
    let response = this.http.post(this.path + '/api/Users/lookupsearch', obj).map(response => response.json());
    return response;
  }
  viewplayerobj(obj) {
    this.playerobj = obj;
  }
  getviewplayerobj() {
    return this.playerobj;
  }

  //search pickle ball Player.
  viewplayerDetailse(id) {
    let response = this.http.get(this.path + '/api/Users/playerdetails/' + id).map(response => response.json());
    return response;
  }

  //service for player Phots.
  playerPhots(obj){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + obj.token);
    let options = new RequestOptions({ headers: headers });
    delete obj.token;

    let response = this.http.post(this.path + '/api/Users/playerpicsremove', obj, options).map(response => response.json());
    return response;
  }

  //search pickle ball Player.
  uploadFileFunction(obj){
    let formData:FormData = new FormData();
        formData.append('ProfilePic',obj.file);
    let headers = new Headers();
        headers.append('Authorization', 'Bearer '+ obj.token);
    let options = new RequestOptions({ headers: headers });

    delete obj.token;
    let response=this.http.post(this.path+'/api/Users/photoupload',formData, options).map(response =>response.json());
    return response;
  }


  //sending forgot password link to mail

  forgotPasswordSendMail(emailData){
    let response = this.http.post(this.path + '/api/Users/forgotpassword', emailData).map(response =>response.json());
    return response;
  }

  //password resetting

  resetPassword(passwordData){
    let response = this.http.post(this.path + '/api/Users/setnewpassword', passwordData).map(response => response.json());
    return response;
  }

  //change password

  changePassword(passwordObject){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + passwordObject.token);
    let options = new RequestOptions({ headers: headers });
    delete passwordObject.token;

    let response = this.http.put(this.path +'/api/Users/changePassword', passwordObject, options).map(response => response.json());
    return response;
  }


  //states service call
  allstates(){
    let response = this.http.get(this.path +'/api/Statess').map(response => response.json());
    return response;
  }

  //countries
  allcountries(){
    let response = this.http.get(this.path +'/api/Countrys').map(response => response.json());
    return response;
  }
}