import {Component, OnInit} from '@angular/core';
import {EventiService, Evento} from "../../services/eventi.service";

@Component({
    selector: 'app-eventi',
    templateUrl: './eventi.component.html',
    styleUrls: ['./eventi.component.scss']
})
export class EventiComponent implements OnInit {

    eventi: Evento[] = []

    constructor(private eventiService: EventiService) {
    }

    ngOnInit(): void {
        this.eventiService.getEventi()
            .subscribe((data: Evento[]) => {
                this.eventi = data;
            })
    }

}
