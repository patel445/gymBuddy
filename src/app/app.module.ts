import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChartPage } from '../pages/chart/chart'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { WorkoutDetailPage } from '../pages/workout-detail/workout-detail'
import { AuthProvider } from '../providers/auth/auth';
import { ChartsModule } from 'ng2-charts';
import { SocialSharing } from '@ionic-native/social-sharing';
import {EditWorkoutPage} from "../pages/edit-workout/edit-workout";
import {MyWorkoutsPage} from "../pages/my-workouts/my-workouts";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChartPage,
    AboutPage,
    WorkoutDetailPage,
    EditWorkoutPage,
    MyWorkoutsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChartPage,
    AboutPage,
    WorkoutDetailPage,
    EditWorkoutPage,
    MyWorkoutsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider, 
    SocialSharing
  ]
})
export class AppModule {}