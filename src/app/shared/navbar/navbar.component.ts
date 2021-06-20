import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tech } from '../../interfaces/tech.interface';
import { ListService } from '../../screens/list/services/list.service';
import { Router } from '@angular/router';
import { LoginService } from '../../screens/login/services/login.service';

 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {
  

  likedTechs: number = 0;
  techs: Tech[] = [];
  subscription: Subscription;
  loginData: Subscription;
  showSignUp: boolean = true;
  toggle: boolean = false;

  constructor(private listService: ListService, private router: Router, private loginService: LoginService) {

    this.subscription = this.listService.GetLikedTechs()
      .subscribe(techs => {
        this.likedTechs = techs.length;
      });
    
      this.loginData = this.listService.GetUserLogged()
      .subscribe(logged => {
        this.showSignUp = !logged;
      })
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
    this.Toggle();
    this.router.navigateByUrl('/main');
    if(document.getElementById(element) !== null){
      document.getElementById(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  Toggle(){
    this.toggle = this.toggle ? false : true;
  }

  GoToList(){
    this.Toggle();
    this.router.navigateByUrl('/list');
  }

  Logout(){
    this.Toggle();
    this.loginService.Logout();
    this.listService.SetUserLoged(false);
    this.listService.UpdateLikedTechs([]);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
