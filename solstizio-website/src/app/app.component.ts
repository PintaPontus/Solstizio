import { Component } from '@angular/core';
import {MenuService} from "./services/menu.service";
import {Piatto} from "./interfaces/piatto";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solstizio-website';

  public piatti: Piatto[] = [];
  public displayedColumns: string [] = [
    'nome',
    'prezzo',
    'tipo',
    'allergeni',
    'vegano'
  ];

  constructor(private menuService: MenuService) {
    menuService.piatti.subscribe({
      next: value => {
        this.piatti = value;
      },
      error: err => {
        console.log(err);
      }
    })

  }
}
