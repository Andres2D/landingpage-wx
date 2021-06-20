import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { environment } from '../../../../environments/environment';
import { signUpresponse } from '../../../interfaces/signUpresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = environment.apiRoute;

  constructor(private http: HttpClient) { }

  SignUp(user: User){
    return this.http.post<signUpresponse>(`${this.baseUrl}/signup`, user);
  }

  SaveToken(token: string){
    if(token != ''){
      localStorage.setItem('token', token);
    }
  }

  ClearToken(){
    localStorage.removeItem('token');
  }

  CheckToken(){
    return localStorage.getItem('token') ? true : false;
  }
}
