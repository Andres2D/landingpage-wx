import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.css']
})
export class EndingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  GoToWolox(){
    window.open("https://www.wolox.com.ar/", "_blank");
  }

}
