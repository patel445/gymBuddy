import { Component, NgZone, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ChartPage } from '../pages/chart/chart';
import { AboutPage } from '../pages/about/about';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public zone:NgZone;
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.zone = new NgZone({});
    this.pages = [
      { title: 'Homepage', component: HomePage },
      { title: 'ChartPage', component: ChartPage },
      { title: 'About', component: AboutPage }
    ];
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
  openPage(page) {
        this.nav.setRoot(page.component);
  }
}