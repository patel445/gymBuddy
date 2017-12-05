import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutDetailPage } from '../workout-detail/workout-detail';
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
  public myWorkoutsRef: firebase.database.Reference = firebase.database().ref('userProfile/' + firebase.auth().currentUser.uid + '/addedWorkouts');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.workoutsRef.orderByChild('uid').equalTo(firebase.auth().currentUser.uid).on('value', snapshot => {
      this.workouts = [];

      snapshot.forEach( workoutSnapshot => {

        this.workouts.push(workoutSnapshot.val());
        return false;
      });
    });


    this.myWorkoutsRef.once('value', snapshot => {
      snapshot.forEach(keySnapshot => {

        let workoutKey = keySnapshot.val();

        this.workoutsRef.child(workoutKey).once('value', tempSnapshot => {
          let workout = tempSnapshot.val()

          this.workouts.push(workout);
        });

        return false;
      })
    });


    console.log('ionViewDidLoad MyWorkoutsPage');
  }

  addWorkout() {
    this.navCtrl.push('AddWorkoutPage');
  }

  goToWorkoutDetailPage(workout) {
    console.log(workout);
    let workoutTemp = {'workout': workout};
    this.navCtrl.push(WorkoutDetailPage, workoutTemp);
  }

}
