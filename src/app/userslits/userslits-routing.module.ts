import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserslitsPage } from './userslits.page';

const routes: Routes = [
  {
    path: '',
    component: UserslitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserslitsPageRoutingModule {}
