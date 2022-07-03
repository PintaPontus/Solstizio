import { Component } from '@angular/core';
import {MenuService} from "./services/menu.service";
import {Piatto} from "./interfaces/piatto";
import {PageLink} from "./interfaces/page-link";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solstizio-website';

  links: PageLink[] = [
    {name: 'I Nostri Prodotti', link:'/prodotti'},
    {name: 'Eventi', link:'/v'},
    {name: 'Chi Siamo', link:'/chisiamo'},
    {name: 'Contatti', link:'/contatti'},
  ];

  constructor() {
  }

}
