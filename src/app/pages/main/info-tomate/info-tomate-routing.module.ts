import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoTomatePage } from './info-tomate.page';

const routes: Routes = [
  {
    path: '',
    component: InfoTomatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoTomatePageRoutingModule {}
