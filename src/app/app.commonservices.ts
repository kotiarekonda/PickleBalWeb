import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class commonServices{
   path ="http://localhost:9000";
   //"http://www.rootwinn.com:9005" server point.
  //"http://localhost:9000" local point.
  constructor(public http: Http) { }

 ngOnInit() {
  }
  
 //Player Register service for pickle ball.
  PlayerRegister(obj){
    let response = this.http.post(this.path +'/api/Users', obj).map(response => response.json());
         return response;
  }

  //player Register up date service for pickle ball.
  playerRegisterUpdate(obj){
    
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer '+ obj.token);
    let options = new RequestOptions({ headers: headers });
    delete obj.token;
    let tempobj:any = {};
    if(obj.Hometown!==undefined){
      tempobj.PublicProfile1 = obj;
    }else{
      tempobj.PublicProfile2 = obj;
    }
    
           let response = this.http.put(this.path +'/api/Users/updatepublicprofile',tempobj, options).map(response => response.json());
         return response;
  }

  // SignInShow(){
  //   let naresh="retrwrr";
  // }
  //playerSignIn service.
  playerSignIn(obj){
     let response = this.http.post(this.path +'/auth/local',obj).map(response => response.json());
         return response;
  }
  //Get player all Details
  getPlayerDetails(str){
    var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer '+ str);
    let options = new RequestOptions({ headers: headers });
    let obj:any = {};
    let response = this.http.get(this.path +'/api/Users/playerprofile',options).map(response => response.json());
    return response;

  }

  //tournament player Detailse Update.
  tournamentplayerDetailseUpdate(obj){
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer '+ obj.token);
    let options = new RequestOptions({ headers: headers });
    delete obj.token;
    
           let response = this.http.put(this.path +'/api/Users/userprofile',obj, options).map(response => response.json());
         return response;
  }

}