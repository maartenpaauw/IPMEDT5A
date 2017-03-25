webpackJsonp([3,6],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_login_guard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(32);
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
    function LoginFormComponent(formBuilder, loginService, loginGuard, titleService) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.loginGuard = loginGuard;
        this.titleService = titleService;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__guards_login_guard__["a" /* LoginGuard */].check()) {
            this.loginGuard.redirect();
        }
        this.titleService.setTitle('Inloggen — IPMEDT5A');
        this.loginForm = this.formBuilder.group({
            'email': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginFormComponent.prototype.submitForm = function (value) {
        var _this = this;
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
        template: __webpack_require__(295),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__guards_login_guard__["a" /* LoginGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__guards_login_guard__["a" /* LoginGuard */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object])
], LoginFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__(297),
        styles: [__webpack_require__(290)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return students; });
var url = "http://application.dev/api/";
var students = [
    {
        "naam": "Maarten Paauw",
        "email": "s1094220@student.hsleiden.nl"
    },
    {
        "naam": "Djovanni Tehubijuluw",
        "email": "s1095067@student.hsleiden.nl"
    },
    {
        "naam": "Bram Valstar",
        "email": "s1092875@student.hsleiden.nl"
    },
    {
        "naam": "Rogier Cabout",
        "email": "s1071287@student.hsleiden.nl"
    }
];
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard.module": [
		562,
		1
	],
	"./settings.module": [
		563,
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
webpackAsyncContext.id = 210;


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bootloader__ = __webpack_require__(229);






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

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_routing_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_form_login_form_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_not_found_not_found_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_login_login_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_login_guard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__(214);
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
            __WEBPACK_IMPORTED_MODULE_7__components_login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_not_found_not_found_component__["a" /* NotFoundComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__modules_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_13__guards_login_guard__["a" /* LoginGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(292),
        styles: [__webpack_require__(285)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent() {
        this.students = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* students */];
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.year = new Date().getFullYear();
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(293),
        styles: [__webpack_require__(286)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(294),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_login_guard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = (function () {
    function MenuComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function () {
            _this.loggedIn = __WEBPACK_IMPORTED_MODULE_2__guards_login_guard__["a" /* LoginGuard */].check();
        });
        this.loggedIn = __WEBPACK_IMPORTED_MODULE_2__guards_login_guard__["a" /* LoginGuard */].check();
    };
    MenuComponent.prototype.logout = function () {
        this.loginService.logout();
        this.loggedIn = false;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__(296),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(171);
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




var REQUEST_IDLE_CALLBACK = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* OpaqueToken */]('REQUEST_IDLE_CALLBACK');
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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idle_preload_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_form_login_form_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_login_guard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_not_found_not_found_component__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard.module#DashboardModule',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_4__guards_login_guard__["a" /* LoginGuard */]
        ]
    },
    {
        path: 'settings',
        loadChildren: './settings.module#SettingsModule',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_4__guards_login_guard__["a" /* LoginGuard */]
        ]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_form_login_form_component__["a" /* LoginFormComponent */]
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_5__components_not_found_not_found_component__["a" /* NotFoundComponent */]
    },
    {
        path: '**',
        redirectTo: '/404'
    },
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

/***/ 229:
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

/***/ 230:
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

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__(218);
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

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid bg-primary mt-5\">\n  <div class=\"container py-5\">\n    <div class=\"row text-white\">\n      <div class=\"col\">\n        <p>Copyright &copy; {{ year }} — IPMEDT5A — MAF Leiden.</p>\n        <small>\n          <a class=\"text-white pr-4\" *ngFor=\"let student of students\" [href]=\"'mailto:' + student.email\" [innerText]=\"student.naam\" [title]=\"'Mail naar ' + student.naam\"></a>\n        </small>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-fluid mb-5\">\n  <app-menu></app-menu>\n</div>\n"

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"msg\" [innerText]=\"msg\"></span>\n\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm(loginForm.value)\">\n  <div class=\"form-group\" [ngClass]=\"{'has-danger': !loginForm.controls['email'].valid && loginForm.controls['email'].touched}\">\n    <label class=\"form-control-label\" for=\"email\">Email address</label>\n    <input type=\"email\" class=\"form-control form-control-danger\" id=\"email\" aria-describedby=\"email-help\" placeholder=\"Enter email\" [formControl]=\"loginForm.controls['email']\">\n    <div class=\"form-control-feedback\" *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].touched\">Shucks, check the formatting of that and try again.</div>\n    <small id=\"email-help\" class=\"form-text text-muted\">Vul hier je e-mailadres in.</small>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-danger': !loginForm.controls['password'].valid && loginForm.controls['password'].touched}\">\n    <label class=\"form-control-label\" for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control form-control-danger\" id=\"password\" aria-describedby=\"password-help\" placeholder=\"Password\" [formControl]=\"loginForm.controls['password']\">\n    <div class=\"form-control-feedback\" *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">Shucks, check the formatting of that and try again.</div>\n    <small id=\"password-help\" class=\"form-text text-muted\">Vul hier je wachtwoord in.</small>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Inloggen</button>\n</form>"

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;<a routerLink=\"/dashboard\">Dashboard</a>&ndash;&gt;-->\n<!--<a routerLink=\"/login\">Login</a>-->\n<!--<a (click)=\"logout()\">Logout</a>-->\n\n<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary bg-faded\">\n    <div class=\"container\">\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">IPMEDT5A</a>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n            <div class=\"navbar-nav\">\n                <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/dashboard\" *ngIf=\"loggedIn\">Dashboard <span class=\"sr-only\">(current)</span></a>\n                <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/settings\" *ngIf=\"loggedIn\">Settings</a>\n                <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/login\" *ngIf=\"!loggedIn\">Inloggen</a>\n                <a class=\"nav-item nav-link\" (click)=\"logout()\" *ngIf=\"loggedIn\">Uitloggen</a>\n            </div>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__ = __webpack_require__(51);
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
    function LoginGuard(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginGuard.check = function () {
        return !!localStorage.getItem('token');
    };
    LoginGuard.prototype.canActivate = function () {
        var _this = this;
        this.loginService.check().subscribe(function (res) {
            return true;
        }, function (err) {
            _this.redirect('/login');
            return false;
        });
        return true;
    };
    LoginGuard.prototype.redirect = function (url) {
        if (url === void 0) { url = '/dashboard'; }
        this.router.navigateByUrl(url);
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], LoginGuard);

var _a, _b;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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





var LoginService = LoginService_1 = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginService.headers = function (auth, json) {
        if (auth === void 0) { auth = false; }
        if (json === void 0) { json = false; }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        if (auth) {
            headers.append('Authorization', "Bearer " + localStorage.getItem('token'));
        }
        if (json) {
            headers.append('Content-Type', 'multipart/json');
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
    };
    LoginService.prototype.login = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* url */] + "authenticate", data, LoginService_1.headers(false, true))
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
                return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.status);
            }
            else if (error.status == 500) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.status);
            }
        });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    };
    LoginService.prototype.check = function () {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* url */] + "authenticate/check", null, LoginService_1.headers(true))
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.user) {
                return true;
            }
            return false;
        }).
            catch(function (error) {
            if (error.status <= 400) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.status);
            }
        });
    };
    return LoginService;
}());
LoginService = LoginService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginService);

var LoginService_1, _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(211);


/***/ })

},[559]);
//# sourceMappingURL=main.bundle.js.map