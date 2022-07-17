import {Injectable, Query} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {environment} from "../../environments/environment";
import {Timestamp} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class EventiService {
    private eventiColl: AngularFirestoreCollection<Evento>;

    constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
        this.eventiColl = afs.collection<Evento>(environment.solstizio.eventsCollPath);
    }

    getEventi() {
        return this.eventiColl.valueChanges();
    }

}

export interface Evento {
    id: string;
    nome: string;
    descrizione: string;
    orario: {
        seconds: number;
        nanoseconds: number;
    },
    img: string;
}
