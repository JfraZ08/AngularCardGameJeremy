import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InscriptionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    InscriptionComponent
  ],
  providers:[],
  bootstrap:[]
})
export class InscriptionModule { }
