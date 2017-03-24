webpackJsonp([2,5],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sizes.module": [
		479,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 138;


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bootloader__ = __webpack_require__(152);






if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
var bootstrap = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
};
if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__bootloader__["a" /* bootloader */])(bootstrap);
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return url; });
var url = "http://application.dev/api/";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_routing_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_form_login_form_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_login_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_login_guard__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_form_login_form_component__["a" /* LoginFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__modules_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_9__guards_login_guard__["a" /* LoginGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(211),
        styles: [__webpack_require__(208)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* unused harmony export REQUEST_IDLE_CALLBACK */
/* unused harmony export requestIdle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IdlePreload; });
/* unused harmony export IDLE_PRELOAD_PROVIDERS */
/* unused harmony export REQUEST_IDLE_CALLBACK_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdlePreloadModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var REQUEST_IDLE_CALLBACK = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* OpaqueToken */]('REQUEST_IDLE_CALLBACK');
function requestIdle(ngzone) {
    if (typeof (window) !== 'undefined') {
        if ('requestIdleCallback' in window) {
            return function (fn) { return window['requestIdleCallback'](fn); };
        }
        return function (fn) { return ngzone.runOutsideAngular(function () { return window.setTimeout(fn, 10); }); };
    }
}
var IdlePreload = (function () {
    function IdlePreload(ngZone, requestIdleCallback) {
        this.ngZone = ngZone;
        this.requestIdleCallback = requestIdleCallback;
    }
    IdlePreload.prototype.preload = function (route, fn) {
        try {
            this.requestIdleCallback(fn);
        }
        catch (err) {
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
    };
    return IdlePreload;
}());
IdlePreload = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(REQUEST_IDLE_CALLBACK)),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* NgZone */]) === "function" && _a || Object, Object])
], IdlePreload);

var IDLE_PRELOAD_PROVIDERS = [
    {
        provide: IdlePreload,
        useClass: IdlePreload
    }
];
var REQUEST_IDLE_CALLBACK_PROVIDERS = [
    {
        provide: REQUEST_IDLE_CALLBACK,
        useFactory: requestIdle,
        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* NgZone */]]
    }
];
var IdlePreloadModule = IdlePreloadModule_1 = (function () {
    function IdlePreloadModule() {
    }
    IdlePreloadModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: IdlePreloadModule_1,
            providers: (config.requestIdleCallback === false ? [] : REQUEST_IDLE_CALLBACK_PROVIDERS).concat(IDLE_PRELOAD_PROVIDERS)
        };
    };
    IdlePreloadModule.IdleStrategy = function () {
        return IdlePreload;
    };
    return IdlePreloadModule;
}());
IdlePreloadModule = IdlePreloadModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */]
        ]
    })
], IdlePreloadModule);

var _a, IdlePreloadModule_1;
//# sourceMappingURL=idle.preload.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idle_preload_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_form_login_form_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_login_guard__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // {
    //     path: '',
    //     pathMatch: 'full'
    // },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_form_login_form_component__["a" /* LoginFormComponent */]
    },
    {
        path: 'sizes',
        loadChildren: './sizes.module#SizesModule',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_4__guards_login_guard__["a" /* LoginGuard */]
        ]
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__idle_preload_module__["a" /* IdlePreloadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, {
                preloadingStrategy: __WEBPACK_IMPORTED_MODULE_2__idle_preload_module__["b" /* IdlePreload */]
            })
        ]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bootloader;
function bootloader(main) {
    function domReadyHandler() {
        document.removeEventListener('DOMContentLoaded', domReadyHandler, false);
        main();
    }
    switch (document.readyState) {
        case 'loading':
            document.addEventListener('DOMContentLoaded', domReadyHandler, false);
            break;
        case 'interactive':
        case 'complete':
        // tslint:disable-next-line:no-switch-case-fall-through
        default:
            main();
    }
}
//# sourceMappingURL=bootloader.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    hmr: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);
/* unused harmony export hmrBootstrap */


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ApplicationRef */]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};
//# sourceMappingURL=hmr.js.map

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/login\">Login</a>\n<a routerLink=\"/sizes\">Sizes</a>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"msg\" [innerText]=\"msg\"></span>\n\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm(loginForm.value)\">\n  <div class=\"form-group\" [ngClass]=\"{'has-danger': !loginForm.controls['email'].valid && loginForm.controls['email'].touched}\">\n    <label class=\"form-control-label\" for=\"email\">Email address</label>\n    <input type=\"email\" class=\"form-control form-control-danger\" id=\"email\" aria-describedby=\"email-help\" placeholder=\"Enter email\" [formControl]=\"loginForm.controls['email']\">\n    <div class=\"form-control-feedback\" *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].touched\">Shucks, check the formatting of that and try again.</div>\n    <small id=\"email-help\" class=\"form-text text-muted\">Vul hier je e-mailadres in.</small>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-danger': !loginForm.controls['password'].valid && loginForm.controls['password'].touched}\">\n    <label class=\"form-control-label\" for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control form-control-danger\" id=\"password\" aria-describedby=\"password-help\" placeholder=\"Password\" [formControl]=\"loginForm.controls['password']\">\n    <div class=\"form-control-feedback\" *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">Shucks, check the formatting of that and try again.</div>\n    <small id=\"password-help\" class=\"form-text text-muted\">Vul hier je wachtwoord in.</small>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Submit</button>\n</form>"

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = (function () {
    function LoginGuard(router) {
        this.router = router;
    }
    LoginGuard.check = function () {
        return !!localStorage.getItem('token');
    };
    LoginGuard.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.redirect('/login');
        return false;
    };
    LoginGuard.prototype.redirect = function (url) {
        if (url === void 0) { url = '/'; }
        this.router.navigateByUrl(url);
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LoginGuard);

var _a;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_login_guard__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(formBuilder, loginService, loginGuard) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.loginGuard = loginGuard;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__guards_login_guard__["a" /* LoginGuard */].check()) {
            this.loginGuard.redirect();
        }
        this.loginForm = this.formBuilder.group({
            'email': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    LoginFormComponent.prototype.submitForm = function (value) {
        var _this = this;
        console.log(value);
        this.loginService.login(value).subscribe(function (res) {
            //TODO: route aanpassen.
            _this.loginGuard.redirect();
        }, function (err) {
            if (err === 401) {
                _this.msg = 'Login gegevens incorrect!';
            }
            else if (err === 500) {
                _this.msg = 'Probeer het later nog eens!';
            }
        });
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-login-form',
        template: __webpack_require__(212),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__guards_login_guard__["a" /* LoginGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__guards_login_guard__["a" /* LoginGuard */]) === "function" && _c || Object])
], LoginFormComponent);

var _a, _b, _c;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'multipart/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
    }
    LoginService.prototype.login = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* url */] + "authenticate", data, this.options)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.token.length > 0) {
                localStorage.setItem('token', res.token);
                return true;
            }
            return false;
        }).
            catch(function (error) {
            if (error.status == 401) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.status);
            }
            else if (error.status == 500) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.status);
            }
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ })

},[476]);
//# sourceMappingURL=main.bundle.js.map