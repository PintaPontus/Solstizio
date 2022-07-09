import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
    providedIn: 'root'
})
export class ProdottiService {
    private prodottiColl: AngularFirestoreCollection<Piatto>;

    constructor(private afs: AngularFirestore) {
        this.prodottiColl = afs.collection<Piatto>('menu');
    }
}

export interface Piatto {
    tipo: string,
    nome: string,
}
