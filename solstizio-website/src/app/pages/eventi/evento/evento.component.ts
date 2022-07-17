import {Component, Input, OnInit} from '@angular/core';
import {Evento} from "../../../services/eventi.service";
import {environment} from "../../../../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {firstValueFrom} from "rxjs";

@Component({
    selector: 'app-evento',
    templateUrl: './evento.component.html',
    styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {
    @Input() evento!: Evento;
    environment = environment;

    constructor(private sanitizer: DomSanitizer) {

    }

    ngOnInit(): void {
    }

    sanitize(url: string) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    getRoute() {
        return 'https://solstiziodestate.web.app/eventi/';
    }
}
