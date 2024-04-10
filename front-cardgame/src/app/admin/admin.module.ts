import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDecksComponent } from './admin-decks/admin-decks.component';



@NgModule({
  declarations: [AdminComponent, AdminDecksComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminComponent],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
