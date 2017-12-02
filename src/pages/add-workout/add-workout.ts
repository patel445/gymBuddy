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

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddWorkoutPage');
    }

    addWorkout(title, nameOne, setsOne, repsOne, nameTwo, setsTwo, repsTwo, nameThree, setsThree, repsThree) {
        let newWorkoutKey = firebase.database().ref().child('workouts').push().key;

        let workout = {
            title: title,
            nameOne: nameOne,
            setsOne: setsOne,
            repsOne: repsOne,
            nameTwo: nameOne,
            setsTwo: setsOne,
            repsTwo: repsOne,
            nameThree: nameOne,
            setsThree: setsOne,
            repsThree: repsOne,
            uid: firebase.auth().currentUser.uid
        };

        return firebase.database().ref('/workouts/' + newWorkoutKey).set(workout);
    }

}
