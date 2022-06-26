import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Piatto} from "../interfaces/piatto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuCollection: AngularFirestoreCollection<Piatto>;
  readonly piatti: Observable<Piatto[]>;

  constructor(private afs: AngularFirestore) {
    this.menuCollection = afs.collection<Piatto>('menu');
    this.piatti = this.menuCollection.valueChanges();
  }
}
