import {Component, OnInit} from '@angular/core';
import {EventiService, Evento} from "../../services/eventi.service";
import {firstValueFrom} from "rxjs";

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
        firstValueFrom(this.eventiService.getEventi())
            .then((data: Evento[]) => {
                this.eventi = data;
                console.log(data);
            })
    }

}
