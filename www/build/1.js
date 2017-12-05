webpackJsonp([1],{

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function() { return PasswordResetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_reset__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordResetPageModule = (function () {
    function PasswordResetPageModule() {
    }
    PasswordResetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password_reset__["a" /* PasswordResetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_reset__["a" /* PasswordResetPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__password_reset__["a" /* PasswordResetPage */]
            ]
        })
    ], PasswordResetPageModule);
    return PasswordResetPageModule;
}());

//# sourceMappingURL=password-reset.module.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(623);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordResetPage = (function () {
    function PasswordResetPage(navCtrl, alertCtrl, formBuilder, authProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])]
        });
    }
    PasswordResetPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authProvider.resetPassword(this.resetPasswordForm.value.email)
                .then(function (user) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: "We just sent you a reset link to your email",
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel',
                                handler: function () {
                                    _this.navCtrl.pop();
                                }
                            }
                        ]
                    });
                    alert.present();
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var errorMessage = error.message;
                    var errorAlert = _this.alertCtrl.create({
                        message: errorMessage,
                        buttons: [{ text: "Ok", role: 'cancel' }]
                    });
                    errorAlert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    PasswordResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-password-reset',template:/*ion-inline-start:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/password-reset/password-reset.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Reset your Password\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="reset-password">\n  <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address"\n        [class.invalid]="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!resetPasswordForm.controls.email.valid  && resetPasswordForm.controls.email.dirty">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <button ion-button block type="submit">\n      Reset your Password\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/Peter/WebstormProjects/gymBuddy/src/pages/password-reset/password-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PasswordResetPage);
    return PasswordResetPage;
}());

//# sourceMappingURL=password-reset.js.map

/***/ })

});
//# sourceMappingURL=1.js.map