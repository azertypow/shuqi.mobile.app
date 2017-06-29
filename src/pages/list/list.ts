import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  // footer page transition
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
  goToSettingsPage(){
    this.navCtrl.push('SettingsPage',{},{
      animation: "md-transition"
    });
  }
}
