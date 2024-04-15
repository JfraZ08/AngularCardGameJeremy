import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from '../slider/slider.component';
import { SliderModule } from '../slider/slider.module';



@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent
  ],
  providers:[],
  bootstrap:[]
})
export class HomeModule { }
