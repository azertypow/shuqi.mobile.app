import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackPage } from './pack';

@NgModule({
  declarations: [
    PackPage,
  ],
  imports: [
    IonicPageModule.forChild(PackPage),
  ],
  exports: [
    PackPage
  ]
})
export class PackPageModule {}
