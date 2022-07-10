import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    @Input() type: string | undefined;
    @Input() msgInput: string | undefined;
    details: AlertDetails | undefined = new AlertDetails();
    stdMap = new Map<string, AlertDetails>();

    constructor() {
        this.stdMap.set('alert', {
            text: 'Errore: impossibile accedere alla pagina',
            img: 'assets/mat-warning.png',
            danger: true,
        });
        this.stdMap.set('build', {
            text: 'Attenzione: pagina in costruzione',
            img: 'assets/mat-build.png',
            danger: false,
        });
    }

    ngOnInit(): void {
        if (this.type !== undefined && this.stdMap.has(this.type)) {
            let settings = this.stdMap.get(this.type);
            this.details!.img = settings!.img;
            this.details!.text = settings!.text;
            this.details!.danger = settings!.danger;
        }
        if (this.msgInput !== undefined) {
            this.details!.text = this.msgInput;
        }
    }

}

class AlertDetails {
    text: string = 'Errore: impossibile accedere alla pagina';
    img: string = 'assets/mat-warning.png';
    danger: boolean = true;
}
