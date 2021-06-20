import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woloxers',
  templateUrl: './woloxers.component.html',
  styleUrls: ['./woloxers.component.css']
})
export class WoloxersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  GoToTwitter(){
    window.open("https://twitter.com/Wolox", "_blank");
  }

}
