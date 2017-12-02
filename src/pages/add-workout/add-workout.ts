import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

    numCards = 1;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddWorkoutPage');
    }

    moreCards() {
        this.numCards++;
    }

    lessCards() {
        this.numCards--;
    }

}
