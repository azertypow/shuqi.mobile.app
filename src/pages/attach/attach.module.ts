import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttachPage } from './attach';

@NgModule({
  declarations: [
    AttachPage,
  ],
  imports: [
    IonicPageModule.forChild(AttachPage),
  ],
  exports: [
    AttachPage
  ]
})
export class AttachPageModule {}
