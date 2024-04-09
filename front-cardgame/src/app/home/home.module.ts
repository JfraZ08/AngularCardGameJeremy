import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent],
  providers:[],
  bootstrap:[]
})
export class HomeModule { }
