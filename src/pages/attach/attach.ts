import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AttachPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-attach',
  templateUrl: 'attach.html',
})
export class AttachPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttachPage');
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
  goToSettingsPage(){
    this.navCtrl.push('SettingsPage',{},{
      animation: "md-transition"
    });
  }
}
