import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AddWorkoutPage } from "../add-workout/add-workout";
import { WorkoutDetailPage } from "../workout-detail/workout-detail"
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public workouts: Array<any> = [];
    public workoutsRef: firebase.database.Reference = firebase.database().ref().child('workouts');

    constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
    }

    ionViewDidLoad() {
        this.workoutsRef.on('value', snapshot => {
            this.workouts = [];

            snapshot.forEach( workoutSnapshot => {
              let item = workoutSnapshot.val();
              item.key = workoutSnapshot.key;

              this.workouts.push(item);
              return false;
            });
        });
    }

  logMeOut() {
    this.authProvider.logoutUser().then( () => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

  addWorkout() {
    this.navCtrl.push('AddWorkoutPage');
  }

  removeWorkout(workout){
      if((workout.key != null) && (workout.key != '')) {
        this.workoutsRef.child(workout.key).remove().then(function() {
          console.log('Workout removed');
        });
      }
  }

  goToWorkoutDetailPage(workout) {
    console.log(workout);
    let workoutTemp = {'workout': workout};
    this.navCtrl.push(WorkoutDetailPage, workoutTemp);
  }

}
