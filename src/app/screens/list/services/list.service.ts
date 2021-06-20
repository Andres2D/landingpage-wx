import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tech } from '../../../interfaces/tech.interface';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  private subject = new Subject<Tech[]>();
  private userLogged = new Subject<boolean>();

  GetTechs(){
    return this.http.get<Tech[]>(`${environment.apiRoute}/techs`);
  }

  SaveLikedTechs(likedTechs: Tech[]){
    localStorage.setItem('likedTechs', JSON.stringify(likedTechs));
    this.UpdateLikedTechs(likedTechs);
  }

  UpdateLikedTechs(techs: Tech[]){
    this.subject.next(techs);
  }

  GetLikedTechs(): Observable<Tech[]> {
    return this.subject.asObservable();
  }

  SetUserLoged(userLogged: boolean){
    this.userLogged.next(userLogged);
  }

  GetUserLogged(): Observable<boolean>{
    return this.userLogged;
  }
}
