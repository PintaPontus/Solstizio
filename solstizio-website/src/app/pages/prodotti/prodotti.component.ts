import {Component, OnInit} from '@angular/core';
import {Piatto, ProdottiService} from "../../services/prodotti.service";

@Component({
  selector: 'app-menu',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit {

  public piatti: Piatto[] = [];

    constructor(private prodottiService: ProdottiService) {
    }

  ngOnInit(): void {
  }

}
