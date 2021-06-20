import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tech } from '../../interfaces/tech.interface';
import { ListService } from '../../screens/list/services/list.service';

 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {
  

  likedTechs: number = 0;
  techs: Tech[] = [];
  subscription: Subscription;
  showSignUp: boolean = true;
  

  constructor(private listService: ListService) {

    this.subscription = this.listService.GetLikedTechs()
      .subscribe(techs => {
        this.likedTechs = techs.length;
      });
   }

  ngOnInit() {

    if(localStorage.getItem('token')){
      this.showSignUp = false;
    }else{
      this.showSignUp = true;
    }

    if(localStorage.getItem('likedTechs')){
      this.techs = JSON.parse(localStorage.getItem('likedTechs'));
    }
    this.likedTechs = this.techs.length;
  }

  ScrollToElement(element: string) {
    document.getElementById(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
