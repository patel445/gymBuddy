import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from "firebase";

/**
 * Generated class for the EditWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-workout',
  templateUrl: 'edit-workout.html',
})
export class EditWorkoutPage {

  public workout: any = {};
  public dbRef = firebase.database().ref();
  public origAmount: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.workout = navParams.get("workout");

    if(this.workout == null) {
      console.log('Workout not found');
    } else {
      console.log(this.workout)
    }

    this.origAmount = (this.workout.setsOne*this.workout.repsOne + this.workout.setsTwo*this.workout.repsTwo + this.workout.setsThree*this.workout.repsThree);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditWorkoutPage');
  }

  editWorkout() {
    console.log(this.workout);

    let workoutKey = this.workout.key;

    delete Object.getPrototypeOf(this.workout).key;

    this.dbRef.child('workouts/' + workoutKey).set(this.workout).then(function() {
      console.log('Updated workout');
    });

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!

    let yyyy = today.getFullYear();

    let curr = mm+'/'+dd+'/'+yyyy;

    let uid = firebase.auth().currentUser.uid;

    // Check if total exists for day
    this.dbRef.child('userProfile/' + uid + '/totals').orderByChild('date').equalTo(curr).once('value', snapshot => {

      let key;
      let amount = 0;

      if(snapshot.exists()) {

        snapshot.forEach( totalSnapshot => {
          amount = totalSnapshot.val().amount;
          key = totalSnapshot.key;

          return false;
        });

        amount += (-this.origAmount + this.workout.setsOne*this.workout.repsOne + this.workout.setsTwo*this.workout.repsTwo + this.workout.setsThree*this.workout.repsThree);

        this.dbRef.child('userProfile/' + uid + '/totals/' + key + '/amount').set(amount);
      } else {
        let newTotalKey = this.dbRef.child('userProfile/' + uid + '/totals').push().key;

        let newTotal = {
          date: curr,
          amount: (-this.origAmount + this.workout.setsOne*this.workout.repsOne + this.workout.setsTwo*this.workout.repsTwo + this.workout.setsThree*this.workout.repsThree)
        };

        this.dbRef.child('userProfile/' + uid + '/totals/' + newTotalKey).set(newTotal);
      }
    });

    this.navCtrl.pop();
  }

}
