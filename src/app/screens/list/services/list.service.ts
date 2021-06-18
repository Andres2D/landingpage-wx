import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tech } from '../../../interfaces/tech.interface';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  private subject = new Subject<Tech[]>();

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
}
