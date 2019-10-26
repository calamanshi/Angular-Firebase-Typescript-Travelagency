import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
private heroHeading: string;
private  heroText: string;
private heroBtnText : string;
private heroBtnUrl:   string;
  constructor() { 
this.heroHeading =  "Experience the differenceTravelex";
  this.heroText =  "In an attempt to do everything better, we offer you the things you won't get anywhere else!";
  // this.heroBtnText =  "Learn more";
  // this.heroBtnUrl =  "https://codefactory.wien" ;
  }

  ngOnInit() {
  }

}
