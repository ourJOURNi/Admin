import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FairPageComponent } from '../fair-page/fair-page.component';
import { FairPageRoutingModule } from './fair-page-routing.module';


@NgModule({
  declarations: [
  FairPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FairPageRoutingModule
  ],
  entryComponents: []
})
export class FairPageModule { }
