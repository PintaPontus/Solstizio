import {Injectable, Query} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {getDocs} from "@angular/fire/firestore";

@Injectable({
    providedIn: 'root'
})

export class EventiService {
    private eventiColl: AngularFirestoreCollection<Evento>;

    constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
        this.eventiColl = afs.collection<Evento>('eventi');
    }

    getEventi() {
        return this.eventiColl.valueChanges();
    }


    // const ref = this.storage.ref('eventi/davideast.jpg');
    // ref.getDownloadURL();
}

export interface Evento {
    nome: string,
    data: Date,
    img: string,
}
