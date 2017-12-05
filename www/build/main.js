webpackJsonp([8],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(65);
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

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
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
    WorkoutDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workout-detail',template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/workout-detail/workout-detail.html"*/'<!--\n  Generated template for the WorkoutDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Add Workout\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>{{ workout.title }}</h1>\n\n\n  <ion-card>\n\n    <ion-card-header>\n      {{ workout.nameOne }}\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>Sets: {{ workout.setsOne }}</ion-col>\n          <ion-col col-6>Reps: {{ workout.repsOne }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n      {{ workout.nameTwo }}\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>Sets: {{ workout.setsTwo }}</ion-col>\n          <ion-col col-6>Reps: {{ workout.repsTwo }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n      {{ workout.nameThree }}\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>Sets: {{ workout.setsThree }}</ion-col>\n          <ion-col col-6>Reps: {{ workout.repsThree }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/workout-detail/workout-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WorkoutDetailPage);
    return WorkoutDetailPage;
}());

//# sourceMappingURL=workout-detail.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout_detail_workout_detail__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
    function HomePage(navCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.workouts = [];
        this.workoutsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref().child('workouts');
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Homepage\n    </ion-title>\n    <ion-buttons end>\n    <button ion-button color="danger" (click)="logMeOut()">Logout</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item-sliding *ngFor="let workout of workouts">\n        <ion-item>\n        <ion-list-header>\n          {{ workout.title }}\n        </ion-list-header>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4>{{ workout.nameOne }} - {{ workout.setsOne }}x{{ workout.repsOne }}</ion-col>\n              <ion-col col-4>{{ workout.nameTwo }} - {{ workout.setsTwo }}x{{ workout.repsTwo }}</ion-col>\n              <ion-col col-4>{{ workout.nameThree }} - {{ workout.setsThree }}x{{ workout.repsThree }}</ion-col> \n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item-options>\n            <button ion-button color="light" icon-left (click)="goToWorkoutDetailPage(workout)">\n            <ion-icon name="ios-more"></ion-icon>\n               View\n            </button>\n            <button ion-button color="danger" icon-left (click)="removeWorkout(workout)">\n            <ion-icon name="ios-trash"></ion-icon>\n               Delete\n            </button>\n        </ion-item-options>\n      </ion-item-sliding>\n\n  </ion-list>\n\n    <ion-fab bottom center>\n        <button ion-fab (click)="addWorkout()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n    \n\n</ion-content>'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
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

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		612,
		7
	],
	"../pages/add-workout/add-workout.module": [
		613,
		4
	],
	"../pages/chart/chart.module": [
		614,
		6
	],
	"../pages/login/login.module": [
		616,
		2
	],
	"../pages/my-workouts/my-workouts.module": [
		615,
		3
	],
	"../pages/password-reset/password-reset.module": [
		617,
		1
	],
	"../pages/signup/signup.module": [
		619,
		0
	],
	"../pages/workout-detail/workout-detail.module": [
		618,
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
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(430);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chart_chart__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_workout_detail_workout_detail__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_charts__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_charts__);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_workout_detail_workout_detail__["a" /* WorkoutDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-workout/add-workout.module#AddWorkoutPageModule', name: 'AddWorkoutPage', segment: 'add-workout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'ChartPage', segment: 'chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-workouts/my-workouts.module#MyWorkoutsPageModule', name: 'MyWorkoutsPage', segment: 'my-workouts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workout-detail/workout-detail.module#WorkoutDetailPageModule', name: 'WorkoutDetailPage', segment: 'workout-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_9__pages_workout_detail_workout_detail__["a" /* WorkoutDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 248,
	"./af.js": 248,
	"./ar": 249,
	"./ar-dz": 250,
	"./ar-dz.js": 250,
	"./ar-kw": 251,
	"./ar-kw.js": 251,
	"./ar-ly": 252,
	"./ar-ly.js": 252,
	"./ar-ma": 253,
	"./ar-ma.js": 253,
	"./ar-sa": 254,
	"./ar-sa.js": 254,
	"./ar-tn": 255,
	"./ar-tn.js": 255,
	"./ar.js": 249,
	"./az": 256,
	"./az.js": 256,
	"./be": 257,
	"./be.js": 257,
	"./bg": 258,
	"./bg.js": 258,
	"./bn": 259,
	"./bn.js": 259,
	"./bo": 260,
	"./bo.js": 260,
	"./br": 261,
	"./br.js": 261,
	"./bs": 262,
	"./bs.js": 262,
	"./ca": 263,
	"./ca.js": 263,
	"./cs": 264,
	"./cs.js": 264,
	"./cv": 265,
	"./cv.js": 265,
	"./cy": 266,
	"./cy.js": 266,
	"./da": 267,
	"./da.js": 267,
	"./de": 268,
	"./de-at": 269,
	"./de-at.js": 269,
	"./de-ch": 270,
	"./de-ch.js": 270,
	"./de.js": 268,
	"./dv": 271,
	"./dv.js": 271,
	"./el": 272,
	"./el.js": 272,
	"./en-au": 273,
	"./en-au.js": 273,
	"./en-ca": 274,
	"./en-ca.js": 274,
	"./en-gb": 275,
	"./en-gb.js": 275,
	"./en-ie": 276,
	"./en-ie.js": 276,
	"./en-nz": 277,
	"./en-nz.js": 277,
	"./eo": 278,
	"./eo.js": 278,
	"./es": 279,
	"./es-do": 280,
	"./es-do.js": 280,
	"./es.js": 279,
	"./et": 281,
	"./et.js": 281,
	"./eu": 282,
	"./eu.js": 282,
	"./fa": 283,
	"./fa.js": 283,
	"./fi": 284,
	"./fi.js": 284,
	"./fo": 285,
	"./fo.js": 285,
	"./fr": 286,
	"./fr-ca": 287,
	"./fr-ca.js": 287,
	"./fr-ch": 288,
	"./fr-ch.js": 288,
	"./fr.js": 286,
	"./fy": 289,
	"./fy.js": 289,
	"./gd": 290,
	"./gd.js": 290,
	"./gl": 291,
	"./gl.js": 291,
	"./gom-latn": 292,
	"./gom-latn.js": 292,
	"./he": 293,
	"./he.js": 293,
	"./hi": 294,
	"./hi.js": 294,
	"./hr": 295,
	"./hr.js": 295,
	"./hu": 296,
	"./hu.js": 296,
	"./hy-am": 297,
	"./hy-am.js": 297,
	"./id": 298,
	"./id.js": 298,
	"./is": 299,
	"./is.js": 299,
	"./it": 300,
	"./it.js": 300,
	"./ja": 301,
	"./ja.js": 301,
	"./jv": 302,
	"./jv.js": 302,
	"./ka": 303,
	"./ka.js": 303,
	"./kk": 304,
	"./kk.js": 304,
	"./km": 305,
	"./km.js": 305,
	"./kn": 306,
	"./kn.js": 306,
	"./ko": 307,
	"./ko.js": 307,
	"./ky": 308,
	"./ky.js": 308,
	"./lb": 309,
	"./lb.js": 309,
	"./lo": 310,
	"./lo.js": 310,
	"./lt": 311,
	"./lt.js": 311,
	"./lv": 312,
	"./lv.js": 312,
	"./me": 313,
	"./me.js": 313,
	"./mi": 314,
	"./mi.js": 314,
	"./mk": 315,
	"./mk.js": 315,
	"./ml": 316,
	"./ml.js": 316,
	"./mr": 317,
	"./mr.js": 317,
	"./ms": 318,
	"./ms-my": 319,
	"./ms-my.js": 319,
	"./ms.js": 318,
	"./my": 320,
	"./my.js": 320,
	"./nb": 321,
	"./nb.js": 321,
	"./ne": 322,
	"./ne.js": 322,
	"./nl": 323,
	"./nl-be": 324,
	"./nl-be.js": 324,
	"./nl.js": 323,
	"./nn": 325,
	"./nn.js": 325,
	"./pa-in": 326,
	"./pa-in.js": 326,
	"./pl": 327,
	"./pl.js": 327,
	"./pt": 328,
	"./pt-br": 329,
	"./pt-br.js": 329,
	"./pt.js": 328,
	"./ro": 330,
	"./ro.js": 330,
	"./ru": 331,
	"./ru.js": 331,
	"./sd": 332,
	"./sd.js": 332,
	"./se": 333,
	"./se.js": 333,
	"./si": 334,
	"./si.js": 334,
	"./sk": 335,
	"./sk.js": 335,
	"./sl": 336,
	"./sl.js": 336,
	"./sq": 337,
	"./sq.js": 337,
	"./sr": 338,
	"./sr-cyrl": 339,
	"./sr-cyrl.js": 339,
	"./sr.js": 338,
	"./ss": 340,
	"./ss.js": 340,
	"./sv": 341,
	"./sv.js": 341,
	"./sw": 342,
	"./sw.js": 342,
	"./ta": 343,
	"./ta.js": 343,
	"./te": 344,
	"./te.js": 344,
	"./tet": 345,
	"./tet.js": 345,
	"./th": 346,
	"./th.js": 346,
	"./tl-ph": 347,
	"./tl-ph.js": 347,
	"./tlh": 348,
	"./tlh.js": 348,
	"./tr": 349,
	"./tr.js": 349,
	"./tzl": 350,
	"./tzl.js": 350,
	"./tzm": 351,
	"./tzm-latn": 352,
	"./tzm-latn.js": 352,
	"./tzm.js": 351,
	"./uk": 353,
	"./uk.js": 353,
	"./ur": 354,
	"./ur.js": 354,
	"./uz": 355,
	"./uz-latn": 356,
	"./uz-latn.js": 356,
	"./uz.js": 355,
	"./vi": 357,
	"./vi.js": 357,
	"./x-pseudo": 358,
	"./x-pseudo.js": 358,
	"./yo": 359,
	"./yo.js": 359,
	"./zh-cn": 360,
	"./zh-cn.js": 360,
	"./zh-hk": 361,
	"./zh-hk.js": 361,
	"./zh-tw": 362,
	"./zh-tw.js": 362
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
webpackContext.id = 566;

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chart_chart__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(65);
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

},[406]);
//# sourceMappingURL=main.js.map