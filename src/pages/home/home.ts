import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

// personals class
import Utils from "../../global-class/Utils";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public date: Date;

  constructor(public navCtrl: NavController, private storage: Storage) {

    // updating data
    const dateForDataToSet: Date = new Date(2017, 6, 5);

    //data for user
    const dataToSet: UserData = {
      categories: ["Books","Clothing","Everyday", "Cosmetics", "Sport stuff", "Work Documents"],
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
    console.log("check requested");

    const myDate: Date = new Date();
    console.log(myDate.getDay());
    console.log(Utils.daysWeek.getDayName(myDate.getDay()));
    //console.log(Utils.daysWeek)
  }

  nextPage(){
    this.navCtrl.push('TestPage',{},{
      animation: "ios-transition"
    });
  }

}
