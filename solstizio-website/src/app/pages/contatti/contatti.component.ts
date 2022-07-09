import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contatti',
    templateUrl: './contatti.component.html',
    styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {
    contacts: Contact = {
        address: "Via Alcide De Gasperi, 09015, Domusnovas SU",
        phone: "+39 3318567217",
        fb: "Solstizio D'estate",
        fbLink: "https://www.facebook.com/profile.php?id=100057586803323",
        ig: "@solstizio_destate_domusnovas",
        igLink: "https://www.instagram.com/solstizio_destate_domusnovas/",
    };

    constructor() {
    }

    ngOnInit(): void {
    }

}

export interface Contact {
    address: string,
    phone: string,
    fb: string,
    fbLink: string,
    ig: string,
    igLink: string,
}
