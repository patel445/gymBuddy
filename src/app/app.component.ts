import { Component, NgZone, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { MyWorkoutsPage } from '../pages/my-workouts/my-workouts';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  public zone:NgZone;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.zone = new NgZone({});
    const config = {
      apiKey: "AIzaSyCikpemXegYWxXFki5KI14nWQ3s5ZILzIM",
      authDomain: "gymbuddy-cca5a.firebaseapp.com",
      databaseURL: "https://gymbuddy-cca5a.firebaseio.com",
      projectId: "gymbuddy-cca5a",
      storageBucket: "",
      messagingSenderId: "429837431144"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged( user => {
      this.zone.run( () => {
        if (!user) { 
          this.rootPage = 'LoginPage';
        } else {
          this.rootPage = HomePage;
        }
      });     
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToHome() {
    this.nav.setRoot(HomePage)
  }

  goToMyWorkouts() {
    this.nav.setRoot(MyWorkoutsPage)
  }

  goToHelp() {

  }
}

