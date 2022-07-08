import { Component, OnInit } from '@angular/core';
import {Slide} from "../../shared/slideshow/slideshow.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: Slide[] = [
    {
      title: "home",
      backgroundUrl : "assets/Solstizio.png",
    },
    {
      title: "prodotti",
      backgroundUrl : "https://www.macelleriadandrea.it/wp-content/uploads/2018/04/reale.jpg",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
