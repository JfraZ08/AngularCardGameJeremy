import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCardsComponent } from './admin-cards.component';



@NgModule({
  declarations: [AdminCardsComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    AdminCardsComponent
  ],
  providers: [],
  bootstrap:[],
})
export class AdminCardsModule { }
