import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserslitsPageRoutingModule } from './userslits-routing.module';

import { UserslitsPage } from './userslits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserslitsPageRoutingModule
  ],
  declarations: [UserslitsPage]
})
export class UserslitsPageModule {}
