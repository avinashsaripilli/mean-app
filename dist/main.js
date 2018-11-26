(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    /* height: 100vh; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nmat-card {\r\n    width: 45vw;\r\n}\r\n.input {\r\n    width: 42vw;\r\n    margin-right:19px\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    mat-card {\r\n        width: 80vw;\r\n    }\r\n    .input {\r\n        width: 77vw;\r\n        margin-right:19px\r\n    }\r\n}\r\n.mat-radio-button ~ .mat-radio-button {\r\n    padding-right: 16px;\r\n  }\r\n.m-1 {\r\n    margin: 1em;\r\n}\r\n.file-upload {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n}\r\n.file-upload__label {\r\n  display: block;\r\n  padding: 0.8em 0.8em;\r\n  color: #fff;\r\n  background: rgba(14, 133, 231, 0.74);\r\n  border-radius: 12px;\r\n  margin-bottom: 1rem;\r\n}\r\n.file-upload__input {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    font-size: 1;\r\n    width:0;\r\n    height: 100%;\r\n    opacity: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n\n\n<div class=\"card\" fxLayout=\"row\" >\n  <mat-card>\n    <form [formGroup]=\"createForm\">\n    <mat-card-header>\n      <mat-card-title> <h2 style=\"color:rgba(0,0,0, 0.7)\">Registration Form</h2> </mat-card-title>\n    </mat-card-header>\n    <mat-card-content style=\"margin-left:19px;margin-right:19px\" class=\"input\">\n      <mat-form-field class=\"input\">\n        <input\n          matInput\n          placeholder=\"Full Name\"\n          required\n          formControlName=\"name\"\n          #name\n        />\n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input\n          matInput\n          [matDatepicker]=\"picker\"\n          placeholder=\"Date Of Birth\"\n          required\n          formControlName=\"dob\"\n          #dob\n        />\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker\n          #picker\n          startView=\"year\"\n          [startAt]=\"startDate\"\n        ></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input\n          matInput\n          placeholder=\"Email\"\n          [formControl]=\"emailFormControl\"\n          [errorStateMatcher]=\"matcher\"\n          required\n          formControlName=\"email\"\n          #email\n        />\n        <mat-error\n          *ngIf=\"\n            emailFormControl.hasError('email') &&\n            !emailFormControl.hasError('required')\n          \"\n        >\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <span matPrefix>+91 &nbsp;</span>\n        <input maxlength=\"10\" type=\"tel\" matInput placeholder=\"Phone\" required formControlName=\"phone\" #phone />\n      </mat-form-field>\n\n      <div>\n        <mat-radio-group formControlName=\"gender\" #gender>\n          <div style=\"color:rgba(0,0,0, 0.548)\">Gender *</div>\n          <div class=\"m-1\">\n            <mat-radio-button value=\"male\" required>Male </mat-radio-button>\n          </div>\n          <div class=\"m-1\">\n            <mat-radio-button value=\"female\">Female</mat-radio-button>\n          </div>\n        </mat-radio-group>\n      </div>\n\n   \n    \n<div>\n    <mat-form-field class=\"input\">\n        <mat-select placeholder=\"Nationality\" formControlName=\"nationality\" #nationality>\n            <mat-option *ngFor=\"let nation of nations\" [value]=\"nation.value\">\n                {{nation.viewValue}}\n              </mat-option>\n        </mat-select>\n      </mat-form-field>\n</div>\n\n<div>\n    <mat-form-field class=\"input\">\n        <textarea matInput placeholder=\"Address\" required formControlName=\"address1\" #address1> </textarea>\n      </mat-form-field>\n</div>\n<div>\n    <mat-form-field class=\"input\">\n        <textarea matInput placeholder=\"Address 2(Optional)\" formControlName=\"address2\" #address2></textarea>\n      </mat-form-field>\n</div>\n<mat-form-field class=\"input\">\n    <input class=\"input\" matInput placeholder=\"City\" required formControlName=\"city\" #city>\n  </mat-form-field>\n<mat-form-field class=\"input\">\n    <input class=\"input\" matInput placeholder=\"State\" required formControlName=\"state\" #state>\n  </mat-form-field>\n  <mat-form-field class=\"input\">\n      <input matInput #postalCode maxlength=\"6\" placeholder=\"Postal Code\" required formControlName=\"postal\" #postal >\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 6</mat-hint>\n    </mat-form-field>\n\n\n     \n  <div class=\"file-upload\">\n      <label for=\"upload\" class=\"file-upload__label\"> Upload Image</label>\n      <input id=\"upload\" class=\"file-upload__input\" type=\"file\" name=\"file-upload\">\n  </div>\n    \n \n\n  \n  \n<div>\n  <mat-checkbox  required ></mat-checkbox>\n  <span class=\"mat-caption\">\n    I agree to the Terms and Conditions\n  </span>\n</div>\n\n\n\n</mat-card-content>\n    <div style=\"text-align:center; margin-left:19px;margin-right:19px\">\n      <button style=\"margin: 1.5rem; background: rgba(14, 133, 231, 0.74);\n      border-radius: 12px;\n  color: #fff;\" mat-raised-button type=\"submit\" (click)=\"addUser(name.value,email.value,dob.value,phone.value,gender.value,nationality.value,\n    address1.value,\n    address2.value,\n    city.value,\n    state.value,\n    postal.value)\">Submit</button>\n    </div>\n  </form>\n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: MyErrorStateMatcher, AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var AddComponent = /** @class */ (function () {
    function AddComponent(userService, fb, router) {
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.nations = [
            { value: "INDIA", viewValue: "India" },
            { value: "US", viewValue: "USA" }
        ];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.createForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nationality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            postal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddComponent.prototype.addUser = function (name, email, dob, phone, gender, nationality, address1, address2, city, state, postal) {
        var _this = this;
        this.userService
            .addDetails(name, email, dob, phone, gender, nationality, address1, address2, city, state, postal)
            .subscribe(function () {
            _this.router.navigate(["/display/" + phone]);
        });
    };
    AddComponent.prototype.ngOnInit = function () { };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add",
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cen{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <span class=\"cen\" style=\" margin-left:19px;margin-right:19px\">\r\n        <button style=\"margin: 1.5rem; background: rgba(14, 133, 231, 0.74);\r\n        border-radius: 12px;\r\n        color: #fff;\" mat-raised-button routerLink=\"/add\" >Register</button>\r\n      </span>\r\n    \r\n    <span class=\"cen\" style=\"margin-left:19px;margin-right:19px\">\r\n        <button style=\"margin: 1.5rem; background: rgba(14, 133, 231, 0.74);\r\n        border-radius: 12px;\r\n        color: #fff;\" mat-raised-button routerLink=\"/phonenumber\" >Retrieve</button>\r\n      </span>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    //restricted area
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        //restricted area
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _phonenumber_phonenumber_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./phonenumber/phonenumber.component */ "./src/app/phonenumber/phonenumber.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: "add", component: _add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"] },
    { path: "display/:phone", component: _display_display_component__WEBPACK_IMPORTED_MODULE_11__["DisplayComponent"] },
    { path: "phonenumber", component: _phonenumber_phonenumber_component__WEBPACK_IMPORTED_MODULE_13__["PhonenumberComponent"] },
    { path: "", redirectTo: "/", pathMatch: "full" }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_11__["DisplayComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"], _phonenumber_phonenumber_component__WEBPACK_IMPORTED_MODULE_13__["PhonenumberComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display/display.component.css":
/*!***********************************************!*\
  !*** ./src/app/display/display.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 45vw;\r\n   \r\n  }\r\n  .card {\r\n    /* height: 100vh; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n  mat-card {\r\n    width: 45vw;\r\n    background-color: white;\r\n}\r\n  tr {\r\n    width: 42vw;\r\n    \r\n    \r\n}\r\n  td{\r\n    border: 2px solid rgba(16, 168, 214, 0.767);\r\n    border-radius: 8px;\r\n    margin-right:19px\r\n}\r\n  @media only screen and (max-width: 600px) {\r\n    mat-card {\r\n        width: 80vw;\r\n    }\r\n    tr {\r\n        width: 100vw;\r\n        margin-right:19px\r\n    }\r\n} "

/***/ }),

/***/ "./src/app/display/display.component.html":
/*!************************************************!*\
  !*** ./src/app/display/display.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" fxLayout=\"row\">\n  <mat-card>\n    <table>\n      <tr>\n        <td>Name</td>\n        <td>{{ user.name }}</td>\n      </tr>\n      <tr>\n        <td>Phone</td>\n        <td>{{ user.phone }}</td>\n      </tr>\n      <tr>\n        <td>Email</td>\n        <td>{{ user.email }}</td>\n      </tr>\n      <tr>\n        <td>DOB</td>\n        <td>{{ user.dob }}</td>\n      </tr>\n      <tr>\n        <td>Nationality</td>\n        <td>{{ user.nationality }}</td>\n      </tr>\n      <tr>\n        <td>Primary Address</td>\n        <td>{{ user.address1 }}</td>\n      </tr>\n      <tr>\n        <td>Secondary Address</td>\n        <td>{{ user.address2 }} </td>\n      </tr>\n      <tr>\n        <td>City</td>\n        <td>{{ user.city }}</td>\n      </tr>\n      <tr>\n        <td>State</td>\n        <td>{{ user.state }}</td>\n      </tr>\n    </table>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        // this.router.params.subscribe( params => console.log(params.phone) );
        this.router.params.subscribe(function (params) { return _this.phone = params.phone; });
        this.userService.getDetailsByPhone(this.phone).subscribe(function (user) {
            // console.log(user[0].name);    
            _this.user = user[0];
            console.log(_this.user);
        });
    }
    DisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-display",
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/display/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.css */ "./src/app/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/phonenumber/phonenumber.component.css":
/*!*******************************************************!*\
  !*** ./src/app/phonenumber/phonenumber.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    /* height: 100vh; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nmat-card {\r\n    width: 45vw;\r\n}\r\n.input {\r\n    width: 42vw;\r\n    margin-right:19px\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    mat-card {\r\n        width: 80vw;\r\n    }\r\n    .input {\r\n        width: 77vw;\r\n        margin-right:19px\r\n    }\r\n} "

/***/ }),

/***/ "./src/app/phonenumber/phonenumber.component.html":
/*!********************************************************!*\
  !*** ./src/app/phonenumber/phonenumber.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <mat-card >\n    <form [formGroup]=\"phoneForm\">\n    <div style=\"text-align:center;\">\n      <mat-form-field class=\"input\">\n      <span matPrefix>+91 &nbsp;</span>\n      <input maxlength=\"10\" type=\"tel\" matInput placeholder=\"Phone\" required formControlName=\"phone\" #phone />\n    </mat-form-field>\n    </div>\n    \n    <div style=\"text-align:center; margin-left:19px;margin-right:19px\">\n      <button style=\"margin: 1.5rem; background: rgba(14, 133, 231, 0.74);\n      border-radius: 12px;\n    color: #fff;\" mat-raised-button type=\"submit\" (click)=\"displayDetails(phone.value)\" >Submit</button>\n    </div>\n  </form>\n  </mat-card>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/phonenumber/phonenumber.component.ts":
/*!******************************************************!*\
  !*** ./src/app/phonenumber/phonenumber.component.ts ***!
  \******************************************************/
/*! exports provided: PhonenumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonenumberComponent", function() { return PhonenumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhonenumberComponent = /** @class */ (function () {
    function PhonenumberComponent(userService, fb, router) {
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.phoneForm = this.fb.group({ phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] });
    }
    PhonenumberComponent.prototype.displayDetails = function (phone) {
        this.router.navigate(["/display/" + phone]);
    };
    PhonenumberComponent.prototype.ngOnInit = function () {
    };
    PhonenumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phonenumber',
            template: __webpack_require__(/*! ./phonenumber.component.html */ "./src/app/phonenumber/phonenumber.component.html"),
            styles: [__webpack_require__(/*! ./phonenumber.component.css */ "./src/app/phonenumber/phonenumber.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PhonenumberComponent);
    return PhonenumberComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.uri = "";
    }
    UserService.prototype.getDetailsByPhone = function (phone) {
        return this.http.get(this.uri + "/display/" + phone);
    };
    UserService.prototype.addDetails = function (name, dob, email, phone, gender, nationality, address1, address2, city, state, code) {
        var user = {
            name: name,
            dob: dob,
            email: email,
            phone: phone,
            gender: gender,
            nationality: nationality,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            code: code
        };
        return this.http.post(this.uri + "/add", user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\angularpro\meanstack\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map