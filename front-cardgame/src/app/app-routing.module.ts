import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminCardsComponent } from './admin/admin-cards/admin-cards.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDecksComponent } from './admin/admin-decks/admin-decks.component';
import { SliderComponent } from './slider/slider.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'rules', component: RulesComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin-cards', component: AdminCardsComponent},
  { path: 'admin-decks', component: AdminDecksComponent},
  { path: 'slider', component: SliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
