import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Tech } from '../../../../interfaces/tech.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  techList: Tech[] = [];
  likedTech: Tech[] = [];

  form: FormGroup = new FormGroup({});
  sortAscending: boolean = false;

  constructor(private listService: ListService) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.listService.GetTechs()
    .subscribe(response => {
      this.techList = response;
    });

    this.form = new FormGroup({
      name: new FormControl(''),
      type: new FormControl('')
    });

    if(localStorage.getItem('likedTechs')){
      this.likedTech = JSON.parse(localStorage.getItem('likedTechs'));
    }
  }

  OrderList(){
    if(!this.sortAscending){
      this.techList.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
      this.sortAscending = true;
    }else{
      this.techList.sort((a, b) => (a.tech < b.tech) ? 1 : -1);
      this.sortAscending = false;
    }
  }

  LikeUnlikeTech(tech: Tech){
    if(this.CheckLike(tech)){
      this.likedTech.splice(this.CheckIndex(tech), 1);
    }else{
      this.likedTech.push(tech);
    }

    this.listService.SaveLikedTechs(this.likedTech);
  }

  CheckLike(tech: Tech){
    let include = this.likedTech.some(techL => {
      return JSON.stringify(tech) === JSON.stringify(techL);
    })
    return include;
  }

  CheckIndex(tech: Tech){
    let index = -1;
    this.likedTech.forEach((element, i) => {
      if(JSON.stringify(tech) === JSON.stringify(element)){
        index = i;
      }
    });

    return index;
  }
}
