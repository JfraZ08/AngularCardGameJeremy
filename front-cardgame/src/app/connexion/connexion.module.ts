import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion.component';



@NgModule({
  declarations: [
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[ConnexionComponent],
  providers:[],
  bootstrap:[],
})
export class ConnexionModule { }
