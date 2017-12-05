webpackJsonp([3],{

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkoutsPageModule", function() { return MyWorkoutsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_workouts__ = __webpack_require__(624);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyWorkoutsPageModule = (function () {
    function MyWorkoutsPageModule() {
    }
    MyWorkoutsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_workouts__["a" /* MyWorkoutsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_workouts__["a" /* MyWorkoutsPage */]),
            ],
        })
    ], MyWorkoutsPageModule);
    return MyWorkoutsPageModule;
}());

//# sourceMappingURL=my-workouts.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyWorkoutsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workout_detail_workout_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MyWorkoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyWorkoutsPage = (function () {
    function MyWorkoutsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workouts = [];
        this.workoutsRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref().child('workouts');
    }
    MyWorkoutsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.workoutsRef.orderByChild('uid').equalTo(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            _this.workouts = [];
            snapshot.forEach(function (workoutSnapshot) {
                _this.workouts.push(workoutSnapshot.val());
                return false;
            });
        });
        console.log('ionViewDidLoad MyWorkoutsPage');
    };
    MyWorkoutsPage.prototype.addWorkout = function () {
        this.navCtrl.push('AddWorkoutPage');
    };
    MyWorkoutsPage.prototype.goToWorkoutDetailPage = function (workout) {
        console.log(workout);
        var workoutTemp = { 'workout': workout };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__workout_detail_workout_detail__["a" /* WorkoutDetailPage */], workoutTemp);
    };
    MyWorkoutsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-workouts',template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/my-workouts/my-workouts.html"*/'<!--\n  Generated template for the MyWorkoutsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      My Workouts\n    </ion-title>\n    <ion-buttons end>\n    <button ion-button color="danger" (click)="logMeOut()">Logout</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let workout of workouts" (click)="goToWorkoutDetailPage(workout)">\n    <ion-card-header>\n      {{ workout.title }}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>{{ workout.nameOne }} - {{ workout.setsOne }}x{{ workout.repsOne }}</ion-col>\n          <ion-col col-4>{{ workout.nameTwo }} - {{ workout.setsTwo }}x{{ workout.repsTwo }}</ion-col>\n          <ion-col col-4>{{ workout.nameThree }} - {{ workout.setsThree }}x{{ workout.repsThree }}</ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="addWorkout()">+</button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/my-workouts/my-workouts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MyWorkoutsPage);
    return MyWorkoutsPage;
}());

//# sourceMappingURL=my-workouts.js.map

/***/ })

});
//# sourceMappingURL=3.js.map