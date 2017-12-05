import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'

/**
 * Generated class for the WorkoutDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workout-detail',
  templateUrl: 'workout-detail.html',
})
export class WorkoutDetailPage {

  public workout: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.workout = navParams.get("workout");

    if(this.workout == null) {
      console.log('Workout not found');
    } else {
      console.log(this.workout)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailPage');
  }

}
