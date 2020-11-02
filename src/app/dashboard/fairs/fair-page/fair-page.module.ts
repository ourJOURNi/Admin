import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FairPageComponent } from '../fair-page/fair-page.component';
import { FairPageRoutingModule } from './fair-page-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FairPageRoutingModule
  ],
  declarations: [
],
  entryComponents: [

  ]
})
export class FairPageModule { }
