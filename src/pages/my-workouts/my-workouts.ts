import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the MyWorkoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-workouts',
  templateUrl: 'my-workouts.html',
})
export class MyWorkoutsPage {

  public workouts: Array<any> = [];
  public workoutsRef: firebase.database.Reference = firebase.database().ref().child('workouts');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.workoutsRef.on('value', snapshot => {
      this.workouts = [];

      snapshot.forEach( workoutSnapshot => {

        this.workouts.push(workoutSnapshot.val());
        return false;
      });
    });
    console.log('ionViewDidLoad MyWorkoutsPage');
  }

  addWorkout() {
    this.navCtrl.push('AddWorkoutPage');
  }

}
