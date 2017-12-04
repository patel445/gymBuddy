import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  public amounts: Array<any> = [];
  public workouts: Array<any> = [];
  public workoutsRef: firebase.database.Reference = firebase.database().ref().child('workouts');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
  }

  getData() {
    this.workoutsRef.orderByChild('uid')
      .equalTo(firebase.auth().currentUser.uid)
      .once('value', snapshot => {
        this.workouts = [];

        snapshot.forEach( workoutSnapshot => {

          this.workouts.push(workoutSnapshot.val());
          return false;
        });
      })
  }

  parseWorkouts() {

  }

}
