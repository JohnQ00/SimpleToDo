import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaterPage } from './later.page';

const routes: Routes = [
  {
    path: '',
    component: LaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaterPageRoutingModule {}
