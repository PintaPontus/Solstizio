import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideFunctions, getFunctions} from '@angular/fire/functions';
import {provideMessaging, getMessaging} from '@angular/fire/messaging';
import {provideRemoteConfig, getRemoteConfig} from '@angular/fire/remote-config';
import {provideStorage, getStorage} from '@angular/fire/storage';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireStorageModule, BUCKET} from "@angular/fire/compat/storage";

import {HomeComponent} from './pages/home/home.component';
import {ProdottiComponent} from "./pages/prodotti/prodotti.component";
import {EventiComponent} from './pages/eventi/eventi.component';
import {ChiSiamoComponent} from './pages/chi-siamo/chi-siamo.component';
import {ContattiComponent} from './pages/contatti/contatti.component';
import {SlideshowComponent} from './shared/slideshow/slideshow.component';
import {AlertComponent} from './shared/alert/alert.component';
import {FireImgSrcPipe} from './pipes/fire-img-src.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProdottiComponent,
        EventiComponent,
        ChiSiamoComponent,
        ContattiComponent,
        SlideshowComponent,
        AlertComponent,
        FireImgSrcPipe
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        BrowserModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideFunctions(() => getFunctions()),
        provideMessaging(() => getMessaging()),
        provideRemoteConfig(() => getRemoteConfig()),
        provideStorage(() => getStorage()),
        BrowserAnimationsModule,
    ],
    providers: [{provide: BUCKET, useValue: environment.firebase.storageBucket}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
