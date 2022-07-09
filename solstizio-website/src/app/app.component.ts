import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solstizio-website';
  showMobileMenu: boolean = false;

  links: PageLink[] = [
    {name: 'I Nostri Prodotti', link:'/prodotti'},
    {name: 'Eventi', link:'/eventi'},
    {name: 'Chi Siamo', link:'/chisiamo'},
    {name: 'Contatti', link:'/contatti'},
  ];

  constructor() {
  }

    toggleMobileMenu() {
        this.showMobileMenu = !this.showMobileMenu
    }

    hideMobileMenu() {
        this.showMobileMenu = false;
    }
}

export interface PageLink {
    name: string;
    link: string;
}
