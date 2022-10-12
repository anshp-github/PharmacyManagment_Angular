import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
    doctorLogin(loginModel: any){
      let url= "https://localhost:7174/api/DoctorLogin"
      return this.httpClient.post(url,loginModel)
    }
    adminLogin(loginModel: any){
      let url= "https://localhost:7174/api/AdminLogin"
      return this.httpClient.post(url,loginModel)
    }


}
