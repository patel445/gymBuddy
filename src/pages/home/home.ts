import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AddWorkoutPage } from "../add-workout/add-workout";
import { WorkoutDetailPage } from "../workout-detail/workout-detail";
import { SocialSharing } from '@ionic-native/social-sharing';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public workouts: Array<any> = [];
    public workoutsRef: firebase.database.Reference = firebase.database().ref().child('workouts');

    constructor(public navCtrl: NavController, private socialSharing: SocialSharing, public authProvider: AuthProvider) {
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
    
regularShare(){
    this.socialSharing.share("Checkout this workout", null, "www/assets/img/hulk.jpg", null); 
  }
  whatsappShare(){
    this.socialSharing.shareViaWhatsApp("Checkout this workout", "www/assets/img/hulk.jpg", null); 
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
    let workoutAmount = workout.setsOne * workout.repsOne + workout.setsTwo * workout.repsTwo + workout.setsThree * workout.repsThree;

    if((workout.key != null) && (workout.key != '')) {
      this.workoutsRef.child(workout.key).remove().then(function() {
        console.log('Workout removed');
      });
    }

    let key;
    let amount = 0;

    let that = this;

    firebase.database().ref('userProfile/' + firebase.auth().currentUser.uid + '/totals')
      .orderByChild('date')
      .equalTo(workout.addedAt)
      .once('value', snapshot => {
        snapshot.forEach( totalSnapshot => {
          amount = totalSnapshot.val().amount;
          key = totalSnapshot.key;

          return false;
        });
      }).then(function(that) {
        console.log('found workout');
        let newAmount = amount - workoutAmount;

        firebase.database().ref('userProfile/' + firebase.auth().currentUser.uid + '/totals/' + key)
          .child('amount')
          .set(newAmount);
    });




  }

  goToWorkoutDetailPage(workout) {
    console.log(workout);
    let workoutTemp = {'workout': workout};
    this.navCtrl.push(WorkoutDetailPage, workoutTemp);
  }

  addWorkoutToMyWorkouts(workout) {
    let newKey = workout.key;

    let uid = firebase.auth().currentUser.uid;

    let myRef = firebase.database().ref('userProfile/' + uid + '/addedWorkouts');

    let newMyKey = myRef.push().key;

    myRef.child(newMyKey).set(newKey);
  }

}
