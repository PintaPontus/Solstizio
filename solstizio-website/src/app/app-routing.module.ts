import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProdottiComponent} from "./pages/prodotti/prodotti.component";
import {HomeComponent} from "./pages/home/home.component";
import {EventiComponent} from "./pages/eventi/eventi.component";
import {ChiSiamoComponent} from "./pages/chi-siamo/chi-siamo.component";
import {ContattiComponent} from "./pages/contatti/contatti.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'prodotti', component: ProdottiComponent },
  { path: 'eventi', component: EventiComponent },
  { path: 'chisiamo', component: ChiSiamoComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
