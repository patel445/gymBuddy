import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {AddWorkoutPage} from "../add-workout/add-workout";
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public titles: Array<string> = ['Test', 'TEST'];

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {}

  logMeOut() {
    this.authProvider.logoutUser().then( () => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

  addWorkout() {
    this.navCtrl.push('AddWorkoutPage');
  }

}
