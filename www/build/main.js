webpackJsonp([9],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().createUserWithEmailAndPassword(email, password).then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/userProfile').child(newUser.uid).set({
                email: email
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout_detail_workout_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, socialSharing, authProvider) {
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.authProvider = authProvider;
        this.workouts = [];
        this.workoutsRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref().child('workouts');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.workoutsRef.on('value', function (snapshot) {
            _this.workouts = [];
            snapshot.forEach(function (workoutSnapshot) {
                var item = workoutSnapshot.val();
                item.key = workoutSnapshot.key;
                _this.workouts.push(item);
                return false;
            });
        });
    };
    HomePage.prototype.regularShare = function () {
        this.socialSharing.share("Checkout this workout", null, "www/assets/img/hulk.jpg", null);
    };
    HomePage.prototype.whatsappShare = function () {
        this.socialSharing.shareViaWhatsApp("Checkout this workout", "www/assets/img/hulk.jpg", null);
    };
    HomePage.prototype.logMeOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    HomePage.prototype.addWorkout = function () {
        this.navCtrl.push('AddWorkoutPage');
    };
    HomePage.prototype.removeWorkout = function (workout) {
        if ((workout.key != null) && (workout.key != '')) {
            this.workoutsRef.child(workout.key).remove().then(function () {
                console.log('Workout removed');
            });
        }
    };
    HomePage.prototype.goToWorkoutDetailPage = function (workout) {
        console.log(workout);
        var workoutTemp = { 'workout': workout };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workout_detail_workout_detail__["a" /* WorkoutDetailPage */], workoutTemp);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Homepage\n    </ion-title>\n    <ion-buttons end>\n    <button ion-button color="danger" (click)="logMeOut()">Logout</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item-sliding *ngFor="let workout of workouts">\n        <ion-item>\n        <ion-list-header>\n          {{ workout.title }}\n        </ion-list-header>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4>{{ workout.nameOne }} - {{ workout.setsOne }}x{{ workout.repsOne }}</ion-col>\n              <ion-col col-4>{{ workout.nameTwo }} - {{ workout.setsTwo }}x{{ workout.repsTwo }}</ion-col>\n              <ion-col col-4>{{ workout.nameThree }} - {{ workout.setsThree }}x{{ workout.repsThree }}</ion-col> \n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item-options>\n            <button ion-button color="light" icon-left (click)="goToWorkoutDetailPage(workout)">\n            <ion-icon name="ios-more"></ion-icon>\n               View\n            </button>\n            <button ion-button color="danger" icon-left (click)="removeWorkout(workout)">\n            <ion-icon name="ios-trash"></ion-icon>\n               Delete\n            </button>\n            <button ion-button icon-only (click)="regularShare()" color="dark" clear>\n               <ion-icon class="share-icon" name="ios-text"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="whatsappShare()" color="dark" clear>\n               <ion-icon class="share-icon" name="logo-whatsapp"></ion-icon>\n            </button>\n        </ion-item-options>\n      </ion-item-sliding>\n\n  </ion-list>\n\n    <ion-fab bottom center>\n        <button ion-fab (click)="addWorkout()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n    \n\n</ion-content>'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_workout_edit_workout__ = __webpack_require__(152);
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
 * Generated class for the WorkoutDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkoutDetailPage = (function () {
    function WorkoutDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workout = {};
        this.workout = navParams.get("workout");
        if (this.workout == null) {
            console.log('Workout not found');
        }
        else {
            console.log(this.workout);
        }
    }
    WorkoutDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkoutDetailPage');
    };
    WorkoutDetailPage.prototype.goToEditWorkout = function (workout) {
        var workoutTemp = { 'workout': workout };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_workout_edit_workout__["a" /* EditWorkoutPage */], workoutTemp);
    };
    WorkoutDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workout-detail',template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/workout-detail/workout-detail.html"*/'<!--\n  Generated template for the WorkoutDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Workout\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>{{ workout.title }}</h1>\n\n\n  <ion-card>\n\n    <ion-card-header>\n      {{ workout.nameOne }}\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>Sets: {{ workout.setsOne }}</ion-col>\n          <ion-col col-6>Reps: {{ workout.repsOne }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n      {{ workout.nameTwo }}\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>Sets: {{ workout.setsTwo }}</ion-col>\n          <ion-col col-6>Reps: {{ workout.repsTwo }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n      {{ workout.nameThree }}\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>Sets: {{ workout.setsThree }}</ion-col>\n          <ion-col col-6>Reps: {{ workout.repsThree }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button full (click)="goToEditWorkout(workout)">Edit Workout</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/workout-detail/workout-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WorkoutDetailPage);
    return WorkoutDetailPage;
}());

//# sourceMappingURL=workout-detail.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about-page',template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      About\n    </ion-title>\n    <ion-buttons end>\n    <button ion-button color="danger" (click)="logMeOut()">Logout</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n   <p>Thank you for trying our application</p>\n   <p>Create a workout day and share with others</p>\n   <p>Creators: Jay Patel and Peter Jones</p>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditWorkoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(51);
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
 * Generated class for the EditWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditWorkoutPage = (function () {
    function EditWorkoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workout = {};
        this.dbRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref();
        this.workout = navParams.get("workout");
        if (this.workout == null) {
            console.log('Workout not found');
        }
        else {
            console.log(this.workout);
        }
        this.origAmount = (this.workout.setsOne * this.workout.repsOne + this.workout.setsTwo * this.workout.repsTwo + this.workout.setsThree * this.workout.repsThree);
    }
    EditWorkoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditWorkoutPage');
    };
    EditWorkoutPage.prototype.editWorkout = function () {
        var _this = this;
        console.log(this.workout);
        var workoutKey = this.workout.key;
        delete Object.getPrototypeOf(this.workout).key;
        this.dbRef.child('workouts/' + workoutKey).set(this.workout).then(function () {
            console.log('Updated workout');
        });
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var curr = mm + '/' + dd + '/' + yyyy;
        var uid = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
        // Check if total exists for day
        this.dbRef.child('userProfile/' + uid + '/totals').orderByChild('date').equalTo(curr).once('value', function (snapshot) {
            var key;
            var amount = 0;
            if (snapshot.exists()) {
                snapshot.forEach(function (totalSnapshot) {
                    amount = totalSnapshot.val().amount;
                    key = totalSnapshot.key;
                    return false;
                });
                amount += (-_this.origAmount + _this.workout.setsOne * _this.workout.repsOne + _this.workout.setsTwo * _this.workout.repsTwo + _this.workout.setsThree * _this.workout.repsThree);
                _this.dbRef.child('userProfile/' + uid + '/totals/' + key + '/amount').set(amount);
            }
            else {
                var newTotalKey = _this.dbRef.child('userProfile/' + uid + '/totals').push().key;
                var newTotal = {
                    date: curr,
                    amount: (-_this.origAmount + _this.workout.setsOne * _this.workout.repsOne + _this.workout.setsTwo * _this.workout.repsTwo + _this.workout.setsThree * _this.workout.repsThree)
                };
                _this.dbRef.child('userProfile/' + uid + '/totals/' + newTotalKey).set(newTotal);
            }
        });
        this.navCtrl.pop();
    };
    EditWorkoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-workout',template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/edit-workout/edit-workout.html"*/'<!--\n  Generated template for the AddWorkoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Edit Workout\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="editWorkout()">\n    <ion-item>\n      <ion-label>Workout Title</ion-label>\n      <ion-input type="text" value="{{ workout.title }}" [(ngModel)]="workout.title" name="title"></ion-input>\n    </ion-item>\n\n\n    <ion-card>\n\n      <ion-card-header>\n        <ion-item>\n          <ion-label>Exercise Name</ion-label>\n          <ion-input  type="text" value="{{ workout.nameOne }}" [(ngModel)]="workout.nameOne" name="nameOne"></ion-input>\n        </ion-item>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Sets</ion-label>\n          <ion-input  type="text" value="{{ workout.setsOne }}" [(ngModel)]="workout.setsOne" name="setsOne"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Reps</ion-label>\n          <ion-input  type="text" value="{{ workout.repsOne }}" [(ngModel)]="workout.repsOne" name="repsOne"></ion-input>\n        </ion-item>\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-header>\n        <ion-item>\n          <ion-label>Exercise Name</ion-label>\n          <ion-input  type="text" value="{{ workout.nameTwo }}" [(ngModel)]="workout.nameTwo" name="nameTwo"></ion-input>\n        </ion-item>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Sets</ion-label>\n          <ion-input  type="text" value="{{ workout.setsTwo }}" [(ngModel)]="workout.setsTwo" name="setsTwo"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Reps</ion-label>\n          <ion-input  type="text" value="{{ workout.repsTwo }}" [(ngModel)]="workout.repsTwo" name="repsTwo"></ion-input>\n        </ion-item>\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-header>\n        <ion-item>\n          <ion-label>Exercise Name</ion-label>\n          <ion-input  type="text" value="{{ workout.nameThree }}" [(ngModel)]="workout.nameThree" name="nameThree"></ion-input>\n        </ion-item>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Sets</ion-label>\n          <ion-input  type="text" value="{{ workout.setsThree }}" [(ngModel)]="workout.setsThree" name="setsThree"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Reps</ion-label>\n          <ion-input  type="text" value="{{ workout.repsThree }}" [(ngModel)]="workout.repsThree" name="repsThree"></ion-input>\n        </ion-item>\n      </ion-card-content>\n\n    </ion-card>\n\n    <button ion-button type="submit" block>Edit Workout</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/edit-workout/edit-workout.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], EditWorkoutPage);
    return EditWorkoutPage;
    var _a, _b;
}());

//# sourceMappingURL=edit-workout.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(51);
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
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChartPage = (function () {
    function ChartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.chartData = [];
        this.days = [];
        this.chartType = 'line';
        this.totalsRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.uid + '/totals');
    }
    ChartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var tempChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement);
        console.log('ionViewDidLoad ChartPage');
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var today = new Date();
        var day = new Date();
        var dd, mm, yyyy, curr;
        var _loop_1 = function (i) {
            var that = this_1;
            day = new Date(today.getTime() - ((6 - i) * 24 * 60 * 60 * 1000));
            dd = day.getDate();
            mm = day.getMonth() + 1;
            yyyy = day.getFullYear();
            curr = mm + '/' + dd + '/' + yyyy;
            // console.log(curr);
            // Add day name to data
            this_1.days.push(dayNames[day.getDay()]);
            //console.log(day.getDay());
            // Add day amount to data
            this_1.totalsRef.orderByChild('date').equalTo(curr).once('value', function (snapshot) {
                //let temp = snapshot.val();
                if (snapshot.val()) {
                    console.log('Here');
                    snapshot.forEach(function (totalSnapshot) {
                        _this.chartData.unshift(totalSnapshot.val().amount);
                        return false;
                    });
                }
                else {
                    _this.chartData.unshift(0);
                }
                // console.log(this.chartData[0].data);
            }).then(function () {
                that.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](that.lineCanvas.nativeElement, {
                    type: 'line',
                    data: {
                        labels: that.days,
                        datasets: [{
                                label: 'Reps this Week',
                                data: that.chartData,
                                fill: true
                            }]
                    }
                });
            });
        };
        var this_1 = this;
        for (var i = 0; i < 7; i++) {
            _loop_1(i);
        }
        console.log(this.chartData);
    };
    ChartPage.prototype.chartClicked = function () {
        console.log('Chart Clicked');
    };
    ChartPage.prototype.chartHovered = function () {
        console.log('Chart Hovered');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "lineCanvas", void 0);
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chart',template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/chart/chart.html"*/'<!--\n  Generated template for the ChartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Chart Page\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button color="danger" (click)="logMeOut()">Logout</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <canvas #lineCanvas></canvas>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/chart/chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		614,
		8
	],
	"../pages/add-workout/add-workout.module": [
		615,
		4
	],
	"../pages/chart/chart.module": [
		617,
		7
	],
	"../pages/edit-workout/edit-workout.module": [
		616,
		6
	],
	"../pages/login/login.module": [
		618,
		2
	],
	"../pages/my-workouts/my-workouts.module": [
		619,
		3
	],
	"../pages/password-reset/password-reset.module": [
		620,
		1
	],
	"../pages/signup/signup.module": [
		621,
		0
	],
	"../pages/workout-detail/workout-detail.module": [
		622,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(432);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chart_chart__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_workout_detail_workout_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_charts__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_workout_edit_workout__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_workout_detail_workout_detail__["a" /* WorkoutDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_workout_edit_workout__["a" /* EditWorkoutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-workout/add-workout.module#AddWorkoutPageModule', name: 'AddWorkoutPage', segment: 'add-workout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-workout/edit-workout.module#EditWorkoutPageModule', name: 'EditWorkoutPage', segment: 'edit-workout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'ChartPage', segment: 'chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-workouts/my-workouts.module#MyWorkoutsPageModule', name: 'MyWorkoutsPage', segment: 'my-workouts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workout-detail/workout-detail.module#WorkoutDetailPageModule', name: 'WorkoutDetailPage', segment: 'workout-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_workout_detail_workout_detail__["a" /* WorkoutDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_workout_edit_workout__["a" /* EditWorkoutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 250,
	"./af.js": 250,
	"./ar": 251,
	"./ar-dz": 252,
	"./ar-dz.js": 252,
	"./ar-kw": 253,
	"./ar-kw.js": 253,
	"./ar-ly": 254,
	"./ar-ly.js": 254,
	"./ar-ma": 255,
	"./ar-ma.js": 255,
	"./ar-sa": 256,
	"./ar-sa.js": 256,
	"./ar-tn": 257,
	"./ar-tn.js": 257,
	"./ar.js": 251,
	"./az": 258,
	"./az.js": 258,
	"./be": 259,
	"./be.js": 259,
	"./bg": 260,
	"./bg.js": 260,
	"./bn": 261,
	"./bn.js": 261,
	"./bo": 262,
	"./bo.js": 262,
	"./br": 263,
	"./br.js": 263,
	"./bs": 264,
	"./bs.js": 264,
	"./ca": 265,
	"./ca.js": 265,
	"./cs": 266,
	"./cs.js": 266,
	"./cv": 267,
	"./cv.js": 267,
	"./cy": 268,
	"./cy.js": 268,
	"./da": 269,
	"./da.js": 269,
	"./de": 270,
	"./de-at": 271,
	"./de-at.js": 271,
	"./de-ch": 272,
	"./de-ch.js": 272,
	"./de.js": 270,
	"./dv": 273,
	"./dv.js": 273,
	"./el": 274,
	"./el.js": 274,
	"./en-au": 275,
	"./en-au.js": 275,
	"./en-ca": 276,
	"./en-ca.js": 276,
	"./en-gb": 277,
	"./en-gb.js": 277,
	"./en-ie": 278,
	"./en-ie.js": 278,
	"./en-nz": 279,
	"./en-nz.js": 279,
	"./eo": 280,
	"./eo.js": 280,
	"./es": 281,
	"./es-do": 282,
	"./es-do.js": 282,
	"./es.js": 281,
	"./et": 283,
	"./et.js": 283,
	"./eu": 284,
	"./eu.js": 284,
	"./fa": 285,
	"./fa.js": 285,
	"./fi": 286,
	"./fi.js": 286,
	"./fo": 287,
	"./fo.js": 287,
	"./fr": 288,
	"./fr-ca": 289,
	"./fr-ca.js": 289,
	"./fr-ch": 290,
	"./fr-ch.js": 290,
	"./fr.js": 288,
	"./fy": 291,
	"./fy.js": 291,
	"./gd": 292,
	"./gd.js": 292,
	"./gl": 293,
	"./gl.js": 293,
	"./gom-latn": 294,
	"./gom-latn.js": 294,
	"./he": 295,
	"./he.js": 295,
	"./hi": 296,
	"./hi.js": 296,
	"./hr": 297,
	"./hr.js": 297,
	"./hu": 298,
	"./hu.js": 298,
	"./hy-am": 299,
	"./hy-am.js": 299,
	"./id": 300,
	"./id.js": 300,
	"./is": 301,
	"./is.js": 301,
	"./it": 302,
	"./it.js": 302,
	"./ja": 303,
	"./ja.js": 303,
	"./jv": 304,
	"./jv.js": 304,
	"./ka": 305,
	"./ka.js": 305,
	"./kk": 306,
	"./kk.js": 306,
	"./km": 307,
	"./km.js": 307,
	"./kn": 308,
	"./kn.js": 308,
	"./ko": 309,
	"./ko.js": 309,
	"./ky": 310,
	"./ky.js": 310,
	"./lb": 311,
	"./lb.js": 311,
	"./lo": 312,
	"./lo.js": 312,
	"./lt": 313,
	"./lt.js": 313,
	"./lv": 314,
	"./lv.js": 314,
	"./me": 315,
	"./me.js": 315,
	"./mi": 316,
	"./mi.js": 316,
	"./mk": 317,
	"./mk.js": 317,
	"./ml": 318,
	"./ml.js": 318,
	"./mr": 319,
	"./mr.js": 319,
	"./ms": 320,
	"./ms-my": 321,
	"./ms-my.js": 321,
	"./ms.js": 320,
	"./my": 322,
	"./my.js": 322,
	"./nb": 323,
	"./nb.js": 323,
	"./ne": 324,
	"./ne.js": 324,
	"./nl": 325,
	"./nl-be": 326,
	"./nl-be.js": 326,
	"./nl.js": 325,
	"./nn": 327,
	"./nn.js": 327,
	"./pa-in": 328,
	"./pa-in.js": 328,
	"./pl": 329,
	"./pl.js": 329,
	"./pt": 330,
	"./pt-br": 331,
	"./pt-br.js": 331,
	"./pt.js": 330,
	"./ro": 332,
	"./ro.js": 332,
	"./ru": 333,
	"./ru.js": 333,
	"./sd": 334,
	"./sd.js": 334,
	"./se": 335,
	"./se.js": 335,
	"./si": 336,
	"./si.js": 336,
	"./sk": 337,
	"./sk.js": 337,
	"./sl": 338,
	"./sl.js": 338,
	"./sq": 339,
	"./sq.js": 339,
	"./sr": 340,
	"./sr-cyrl": 341,
	"./sr-cyrl.js": 341,
	"./sr.js": 340,
	"./ss": 342,
	"./ss.js": 342,
	"./sv": 343,
	"./sv.js": 343,
	"./sw": 344,
	"./sw.js": 344,
	"./ta": 345,
	"./ta.js": 345,
	"./te": 346,
	"./te.js": 346,
	"./tet": 347,
	"./tet.js": 347,
	"./th": 348,
	"./th.js": 348,
	"./tl-ph": 349,
	"./tl-ph.js": 349,
	"./tlh": 350,
	"./tlh.js": 350,
	"./tr": 351,
	"./tr.js": 351,
	"./tzl": 352,
	"./tzl.js": 352,
	"./tzm": 353,
	"./tzm-latn": 354,
	"./tzm-latn.js": 354,
	"./tzm.js": 353,
	"./uk": 355,
	"./uk.js": 355,
	"./ur": 356,
	"./ur.js": 356,
	"./uz": 357,
	"./uz-latn": 358,
	"./uz-latn.js": 358,
	"./uz.js": 357,
	"./vi": 359,
	"./vi.js": 359,
	"./x-pseudo": 360,
	"./x-pseudo.js": 360,
	"./yo": 361,
	"./yo.js": 361,
	"./zh-cn": 362,
	"./zh-cn.js": 362,
	"./zh-hk": 363,
	"./zh-hk.js": 363,
	"./zh-tw": 364,
	"./zh-tw.js": 364
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 568;

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chart_chart__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]({});
        this.pages = [
            { title: 'Homepage', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'ChartPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_chart_chart__["a" /* ChartPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] }
        ];
        var config = {
            apiKey: "AIzaSyCikpemXegYWxXFki5KI14nWQ3s5ZILzIM",
            authDomain: "gymbuddy-cca5a.firebaseapp.com",
            databaseURL: "https://gymbuddy-cca5a.firebaseio.com",
            projectId: "gymbuddy-cca5a",
            storageBucket: "",
            messagingSenderId: "429837431144"
        };
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp(config);
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            _this.zone.run(function () {
                if (!user) {
                    _this.rootPage = 'LoginPage';
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
            });
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/app/app.html"*/'<ion-menu [content]="mycontent">\n\n    <ion-content>\n       <ion-list>\n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n            {{p.title}}\n          </button>\n       </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[408]);
//# sourceMappingURL=main.js.map