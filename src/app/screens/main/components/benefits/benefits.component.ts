import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../interfaces/card.interface';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  cards: Card[] = [
    {
      title: 'Flexibilidad \n horaria',
      imgSrc: '../../../../../assets/Ic_Hour.svg'
    },
    {
      title: 'Home office',
      imgSrc: '../../../../../assets/Ic_HomeOffice.svg'
    },
    {
      title: 'Capacitaciones y workshops',
      imgSrc: '../../../../../assets/Ic_Workshops.svg'
    },
    {
      title: 'Snacks, frutas y bebidas gratis',
      imgSrc: '../../../../../assets/Ic_DrinkSnacks.svg'
    },
    {
      title: 'Semana remota',
      imgSrc: '../../../../../assets/Ic_laptop.svg'
    },
    {
      title: 'Trabajar en últimas tecnologías',
      imgSrc: '../../../../../assets/Ic_brain.svg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
