import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../interfaces/card.interface';

@Component({
  selector: 'app-benefit-card',
  templateUrl: './benefit-card.component.html',
  styleUrls: ['./benefit-card.component.css']
})
export class BenefitCardComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
