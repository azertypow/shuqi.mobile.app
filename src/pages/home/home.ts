/// <reference path="../../types/RegisteredObject.d.ts" />

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

// personals class
import Utils from "../../global-class/Utils";
import Categories from "../../global-class/Categories";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public date: Date;
  public listOfObjectOfToday: Array<RegisteredObject>;

  // request-result-container
  public buttonCheckValue: "check"|"close" = "check";
  public checkedRequest: boolean = false;
  public stillNeedResponse: boolean = true;
  public stillNeedResults: Array<Object> = [];
  private responseTime: number;

  constructor(public navCtrl: NavController, private storage: Storage) {

    // set list of today
    this.listOfObjectOfToday = [
      {name: "Sunglasses", category: "clothing"},
      {name: "Math Book", category: "Books"},
      {name: "Wallet", category: "Everyday"},
    ];

    // updating data
    const dateForDataToSet: Date = new Date(2017, 6, 5);

    //data for user
    const dataToSet: UserData = {
      categories: Categories.get(),
      calendar: [
        {
          date: dateForDataToSet,
          dayId: Utils.dateId.generate(dateForDataToSet),
          listOfRegisteredObjects: [
            {
              category: "Books",
              name: "crayon"
            }
          ]
        }
      ]
    };

    //stock new user data
    this.storage.set('UserData', dataToSet).then(()=> {
      console.log("data updated");

      // [clear] toutes les datas stockées
      console.log(this.storage.keys());

      // [clear] dataUser
      console.log(this.storage.get("UserData"));

    }).catch(()=> {
      console.log("erreur de mise a jour des donnés");
    });

    // Update display with data of current day
    this.date = new Date();
  }

  currentDay():string {
    const dayNumber: number = this.date.getDate();
    const dayName: string = Utils.daysWeek.getDayName(this.date.getDay());
    const monthNumber: number = this.date.getMonth();
    return dayName+" "+dayNumber+"/"+monthNumber;
  }

  checkRequested(): void{

    if(this.buttonCheckValue === "check"){
      this.buttonCheckValue = "close";

      // Waiting data from the bluetooth terminal
      this.stillNeedResponse = false;
      this.checkedRequest ? this.checkedRequest = false : this.checkedRequest = true;

      // Simulate the response of the terminal
      this.responseTime = setTimeout(()=>{
        this.stillNeedResponse = true;
        this.stillNeedResults = [{status:"Success", value: "Bravo, you have all your items !"}];
      }, 1000);
    }
    else {
      clearTimeout(this.responseTime);
      this.buttonCheckValue = "check";
      this.checkedRequest = false;
      this.stillNeedResponse = true;
      this.stillNeedResults = [];
    }
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
  goToSettingsPage(){
    this.navCtrl.push('SettingsPage',{},{
      animation: "md-transition"
    });
  }
}
