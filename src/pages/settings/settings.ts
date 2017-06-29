import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  // footer page transition
  goToListPage(){
    this.navCtrl.push('ListPage',{},{
      animation: "md-transition"
    });
  }
  goToPackPage(){
    this.navCtrl.push('PackPage',{},{
      animation: "md-transition"
    });
  }
  goToAttachPage(){
    this.navCtrl.push('AttachPage',{},{
      animation: "md-transition"
    });
  }
}
