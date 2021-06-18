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

  techList: Tech[] = [
    {
      "tech": "Node",
      "year": "2009",
      "author": "Ryan Dahl",
      "license": "MIT",
      "language": "JavaScript",
      "type": "Back-End",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png"
    },
    {
      "tech": "React",
      "year": "2013",
      "author": "Jordan Walke",
      "license": "MIT",
      "language": "JavaScript",
      "type": "Front-End",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png"
    },
    {
      "tech": "Vue",
      "year": "2014",
      "author": "Evan You",
      "license": "MIT",
      "language": "JavaScript",
      "type": "Front-End",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png"
    },
    {
      "tech": "Ruby on Rails",
      "year": "2005",
      "author": "David Heinemeier Hansson",
      "license": "MIT",
      "language": "Ruby",
      "type": "Back-End",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/220px-Ruby_On_Rails_Logo.svg.png"
    },
    {
      "tech": "iOS",
      "year": "2007",
      "author": "Apple Inc.",
      "license": "Proprietary",
      "language": "Swift, Objective-C",
      "type": "Mobile",
      "logo": "http://pluspng.com/img-png/apple-ios-logo-png-ios-apple-logo-vector-download-280.png"
    },
    {
      "tech": "Android",
      "year": "2008",
      "author": "Google",
      "license": "Apache",
      "language": "Java, Kotlin",
      "type": "Mobile",
      "logo": "http://pluspng.com/img-png/apple-ios-logo-png-ios-apple-logo-vector-download-280.png"
    },
    {
      "tech": "Angular",
      "year": "2016",
      "author": "Google",
      "license": "MIT",
      "language": "TypeScript",
      "type": "Front-End",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
    },
    {
      "tech": "React Native",
      "year": "2015",
      "author": "Facebook",
      "license": "MIT",
      "language": "JavaScript",
      "type": "Mobile",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png"
    },
    {
      "tech": "Springboot",
      "year": "2012",
      "author": "Pivotal Software",
      "license": "Apache 2.0",
      "language": "Java",
      "type": "Back-End",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/220px-Spring_Framework_Logo_2018.svg.png"
    }
  ];
  likedTech: Tech[] = [];

  form: FormGroup = new FormGroup({});
  sortAscending: boolean = false;

  constructor(private listService: ListService) { }

  ngOnInit() {
    /*this.listService.GetTechs()
    .subscribe(response => {
      this.techList = response;
    });*/

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
