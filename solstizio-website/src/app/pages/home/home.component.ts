import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ssImgs: string[] = [
    "https://www.macelleriadandrea.it/wp-content/uploads/2018/04/reale.jpg",
    "assets/SolstizioBasic.png",
    "assets/SolstizioBorder.png",
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
