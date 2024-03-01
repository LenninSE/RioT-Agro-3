import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoTomatePageRoutingModule } from './info-tomate-routing.module';

import { InfoTomatePage } from './info-tomate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoTomatePageRoutingModule
  ],
  declarations: [InfoTomatePage]
})
export class InfoTomatePageModule {}
