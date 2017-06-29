import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PackPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pack',
  templateUrl: 'pack.html',
})
export class PackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackPage');
  }

  // footer page transition
  goToListPage(){
    this.navCtrl.push('ListPage',{},{
      animation: "md-transition"
    });
  }
  goToAttachPage(){
    this.navCtrl.push('AttachPage',{},{
      animation: "md-transition"
    });
  }
  goToSettingsPage(){
    this.navCtrl.push('SettingsPage',{},{
      animation: "md-transition"
    });
  }
}
