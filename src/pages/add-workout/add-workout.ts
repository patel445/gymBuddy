import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the AddWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
})
export class AddWorkoutPage {

  public dbRef = firebase.database().ref();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkoutPage');
  }

  addWorkout(title, nameOne, setsOne, repsOne, nameTwo, setsTwo, repsTwo, nameThree, setsThree, repsThree) {
    let newWorkoutKey = this.dbRef.child('workouts').push().key;

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!

    let yyyy = today.getFullYear();

    let curr = mm+'/'+dd+'/'+yyyy;

    let workout = {
      title: title,
      nameOne: nameOne,
      setsOne: setsOne,
      repsOne: repsOne,
      nameTwo: nameTwo,
      setsTwo: setsTwo,
      repsTwo: repsTwo,
      nameThree: nameThree,
      setsThree: setsThree,
      repsThree: repsThree,
      uid: firebase.auth().currentUser.uid,
      addedAt: curr
    };

    this.dbRef.child('workouts/' + newWorkoutKey).set(workout);

    let uid = firebase.auth().currentUser.uid;
    // Check if total exists for day
    this.dbRef.child('userProfile/' + uid + '/totals').orderByChild('date').equalTo(curr).once('value', snapshot => {
      const total = snapshot.val();
      const key = snapshot.key;

      if(total) {
        let amount = total.amount;

        amount += (setsOne*repsOne + setsTwo*repsTwo + setsThree*repsThree);

        this.dbRef.child('userProfile/' + uid + '/totals/' + key + '/amount').set(amount);
      } else {
        let newTotalKey = this.dbRef.child('userProfile/' + uid + '/totals').push().key;

        let newTotal = {
          date: curr,
          amount: (setsOne*repsOne + setsTwo*repsTwo + setsThree*repsThree)
        };

        this.dbRef.child('userProfile/' + uid + '/totals/' + newTotalKey).set(newTotal);
      }
    });



    this.navCtrl.pop();
  }

}
