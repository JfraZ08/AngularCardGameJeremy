import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatTabsModule,
  ],
  exports: [
  ]
})
export class HeaderModule { }
