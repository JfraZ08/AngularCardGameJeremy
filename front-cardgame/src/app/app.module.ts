import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { HomeModule } from './home/home.module';
import { RulesModule } from './rules/rules.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionModule } from './inscription/inscription.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCardsComponent } from './admin/admin-cards/admin-cards.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
    AdminComponent,
    AdminCardsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RulesModule,
    InscriptionModule,
    ReactiveFormsModule,
  
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
