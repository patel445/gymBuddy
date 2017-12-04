webpackJsonp([3],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkoutPageModule", function() { return AddWorkoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_workout__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddWorkoutPageModule = (function () {
    function AddWorkoutPageModule() {
    }
    AddWorkoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_workout__["a" /* AddWorkoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_workout__["a" /* AddWorkoutPage */]),
            ],
        })
    ], AddWorkoutPageModule);
    return AddWorkoutPageModule;
}());

//# sourceMappingURL=add-workout.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWorkoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 * Generated class for the AddWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddWorkoutPage = (function () {
    function AddWorkoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddWorkoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddWorkoutPage');
    };
    AddWorkoutPage.prototype.addWorkout = function (title, nameOne, setsOne, repsOne, nameTwo, setsTwo, repsTwo, nameThree, setsThree, repsThree) {
        var newWorkoutKey = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref().child('workouts').push().key;
        var workout = {
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
            uid: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
            addedAt: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database.ServerValue.TIMESTAMP
        };
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/workouts/' + newWorkoutKey).set(workout);
    };
    AddWorkoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-workout',template:/*ion-inline-start:"/Users/patel445/Desktop/gymBuddy/src/pages/add-workout/add-workout.html"*/'<!--\n  Generated template for the AddWorkoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>\n            Add Workout\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="addWorkout(title, nameOne, setsOne, repsOne, nameTwo, setsTwo, repsTwo, nameThree, setsThree, repsThree)">\n      <ion-item>\n          <ion-label>Workout Title</ion-label>\n          <ion-input type="text"  [(ngModel)]="title" name="title"></ion-input>\n      </ion-item>\n\n\n    <ion-card>\n\n      <ion-card-header>\n        <ion-item>\n          <ion-label>Exercise Name</ion-label>\n          <ion-input  type="text" [(ngModel)]="nameOne" name="nameOne"></ion-input>\n        </ion-item>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Sets</ion-label>\n          <ion-input  type="text" [(ngModel)]="setsOne" name="setsOne"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Reps</ion-label>\n          <ion-input  type="text" [(ngModel)]="repsOne" name="repsOne"></ion-input>\n        </ion-item>\n      </ion-card-content>\n\n    </ion-card>\n\n      <ion-card>\n\n          <ion-card-header>\n              <ion-item>\n                  <ion-label>Exercise Name</ion-label>\n                  <ion-input  type="text" [(ngModel)]="nameTwo" name="nameTwo"></ion-input>\n              </ion-item>\n          </ion-card-header>\n\n          <ion-card-content>\n              <ion-item>\n                  <ion-label>Sets</ion-label>\n                  <ion-input  type="text" [(ngModel)]="setsTwo" name="setsTwo"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Reps</ion-label>\n                  <ion-input  type="text" [(ngModel)]="repsTwo" name="repsTwo"></ion-input>\n              </ion-item>\n          </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n          <ion-card-header>\n              <ion-item>\n                  <ion-label>Exercise Name</ion-label>\n                  <ion-input  type="text" [(ngModel)]="nameThree" name="nameThree"></ion-input>\n              </ion-item>\n          </ion-card-header>\n\n          <ion-card-content>\n              <ion-item>\n                  <ion-label>Sets</ion-label>\n                  <ion-input  type="text" [(ngModel)]="setsThree" name="setsThree"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Reps</ion-label>\n                  <ion-input  type="text" [(ngModel)]="repsThree" name="repsThree"></ion-input>\n              </ion-item>\n          </ion-card-content>\n\n      </ion-card>\n\n    <button ion-button type="submit" block>Add Workout</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/patel445/Desktop/gymBuddy/src/pages/add-workout/add-workout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddWorkoutPage);
    return AddWorkoutPage;
}());

//# sourceMappingURL=add-workout.js.map

/***/ })

});
//# sourceMappingURL=3.js.map