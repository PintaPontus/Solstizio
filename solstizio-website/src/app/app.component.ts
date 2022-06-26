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

  constructor(private menuService: MenuService) {
    menuService.piatti.subscribe({
      next: value => {
        this.piatti = value.sort((a,b) => {
          return a.nome.localeCompare(b.nome);
        });
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getAllergeniOf(piatto: Piatto){
    let list = "";
    piatto.allergeni.forEach((value) => {
      list+=value + ', ';
    })
    return list.slice(0, list.length-2);
  }

  getDescrizioneOf(piatto: Piatto) {
    let desc = "";
    desc += piatto.descrizione;
    if(piatto.allergeni.length > 0){
      desc += ' Allergeni: ';
      desc += this.getAllergeniOf(piatto);
    }
    return desc;
  }

}
