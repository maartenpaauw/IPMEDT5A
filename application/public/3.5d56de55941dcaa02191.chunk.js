webpackJsonp([3,9],{FklU:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("3j3K"),u=t("S7dt"),i=t("2Je8"),o=t("eCJc"),a=t("RX2M"),r=t("M0cT"),s=t("/I96"),c=t("vfkA"),d=t("NVOs"),p=t("qsK9"),_=t("MSQt"),g=t("UyZi"),f=t("Ep2y"),h=t("WKBe"),b=t("1Z2I"),v=t("A8b0"),m=t("as+d"),y=t("62nT"),M=t("yDyO"),N=t("K/oD"),w=t("kzcK"),S=t("5oXY"),O=t("3kwk"),j=t("Kyd9"),P=t("Ku9v"),k=t("7ldD"),T=t("2NoN"),x=t("xiEB"),I=t("SDm3"),R=t("jtp5"),D=t("h+Bk"),C=t("IiyU"),F=t("Nv3S"),z=t("CXHW"),K=t("Fzro"),L=t("TODj"),A=t("n0yc");t.d(n,"SettingsModuleNgFactory",function(){return U});var $=this&&this.__extends||function(l,n){function t(){this.constructor=l}for(var e in n)n.hasOwnProperty(e)&&(l[e]=n[e]);l.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)},E=function(l){function n(n){return l.call(this,n,[k.a,T.a,x.a,I.a,R.a,D.a,C.a,F.a],[])||this}return $(n,l),Object.defineProperty(n.prototype,"_NgLocalization_22",{get:function(){return null==this.__NgLocalization_22&&(this.__NgLocalization_22=new i.NgLocaleLocalization(this.parent.get(e.LOCALE_ID))),this.__NgLocalization_22},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_23",{get:function(){return null==this.__ɵi_23&&(this.__ɵi_23=new d.a),this.__ɵi_23},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NgbModal_24",{get:function(){return null==this.__NgbModal_24&&(this.__NgbModal_24=new O.a(this.componentFactoryResolver,this,this.parent.get(z.a))),this.__NgbModal_24},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_SettingsService_26",{get:function(){return null==this.__SettingsService_26&&(this.__SettingsService_26=new j.a(this.parent.get(K.k))),this.__SettingsService_26},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ProductsService_27",{get:function(){return null==this.__ProductsService_27&&(this.__ProductsService_27=new P.a(this.parent.get(K.k))),this.__ProductsService_27},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.CommonModule,this._NgbAccordionModule_1=new o.a,this._NgbAlertModule_2=new a.a,this._NgbButtonsModule_3=new r.a,this._NgbCarouselModule_4=new s.a,this._NgbCollapseModule_5=new c.a,this._ɵba_6=new d.c,this._FormsModule_7=new d.d,this._NgbDatepickerModule_8=new p.a,this._NgbDropdownModule_9=new _.a,this._NgbModalModule_10=new g.a,this._NgbPaginationModule_11=new f.a,this._NgbPopoverModule_12=new h.a,this._NgbProgressbarModule_13=new b.a,this._NgbRatingModule_14=new v.a,this._NgbTabsetModule_15=new m.a,this._NgbTimepickerModule_16=new y.a,this._NgbTooltipModule_17=new M.a,this._NgbTypeaheadModule_18=new N.a,this._NgbModule_19=new w.b,this._RouterModule_20=new S.q(this.parent.get(S.r,null),this.parent.get(S.j,null)),this._SettingsModule_21=new u.a,this._ROUTES_25=[[{path:"",component:L.a,pathMatch:"full",canActivate:[A.a]}]],this._SettingsModule_21},n.prototype.getInternal=function(l,n){return l===i.CommonModule?this._CommonModule_0:l===o.a?this._NgbAccordionModule_1:l===a.a?this._NgbAlertModule_2:l===r.a?this._NgbButtonsModule_3:l===s.a?this._NgbCarouselModule_4:l===c.a?this._NgbCollapseModule_5:l===d.c?this._ɵba_6:l===d.d?this._FormsModule_7:l===p.a?this._NgbDatepickerModule_8:l===_.a?this._NgbDropdownModule_9:l===g.a?this._NgbModalModule_10:l===f.a?this._NgbPaginationModule_11:l===h.a?this._NgbPopoverModule_12:l===b.a?this._NgbProgressbarModule_13:l===v.a?this._NgbRatingModule_14:l===m.a?this._NgbTabsetModule_15:l===y.a?this._NgbTimepickerModule_16:l===M.a?this._NgbTooltipModule_17:l===N.a?this._NgbTypeaheadModule_18:l===w.b?this._NgbModule_19:l===S.q?this._RouterModule_20:l===u.a?this._SettingsModule_21:l===i.NgLocalization?this._NgLocalization_22:l===d.a?this._ɵi_23:l===O.a?this._NgbModal_24:l===S.u?this._ROUTES_25:l===j.a?this._SettingsService_26:l===P.a?this._ProductsService_27:n},n.prototype.destroyInternal=function(){},n}(e["ɵNgModuleInjector"]),U=new e.NgModuleFactory(E,u.a)},Ix9z:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=["a[_ngcontent-%COMP%]{cursor:pointer}"]},Ku9v:function(l,n,t){"use strict";var e=t("Fzro"),u=t("Gvdl"),i=(t.n(u),t("kZql"));t.d(n,"a",function(){return o});var o=function(){function l(l){this.http=l;var n=new e.l;n.append("Authorization","Bearer "+localStorage.getItem("token")),this.getOptions=new e.j({headers:n})}return l.prototype.getProducts=function(){return this.http.get(i.a.url+"products",this.getOptions).map(function(l){return l.json()}).map(function(l){return l.data}).catch(function(l){return 401==l.status?u.Observable.throw(l.status):500==l.status?u.Observable.throw(l.status):void 0})},l.prototype.uploadProducts=function(l){return this.http.post(i.a.url+"products/upload",l,this.getOptions).map(function(l){return l.json()}).map(function(l){return l.data}).catch(function(l){return 401==l.status?u.Observable.throw(l.status):500==l.status?u.Observable.throw(l.status):void 0})},l.ctorParameters=function(){return[{type:e.k}]},l}()},Nv3S:function(l,n,t){"use strict";function e(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,15,"div",[["class","col-12 col-md-6 pb-4"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,12,"div",[["class","card"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n            "])),(l()(),r["ɵeld"](0,null,null,9,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n                "])),(l()(),r["ɵeld"](0,null,null,0,"h3",[["class","card-title"]],[[8,"innerText",0]],null,null,null,null)),(l()(),r["ɵted"](null,["\n                "])),(l()(),r["ɵeld"](0,null,null,0,"p",[["class","card-text"]],[[8,"innerText",0]],null,null,null,null)),(l()(),r["ɵted"](null,["\n                "])),(l()(),r["ɵeld"](0,null,null,2,"a",[["class","btn"]],[[8,"innerText",0]],[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!==u.toggleSetting(null==l.context.$implicit?null:l.context.$implicit.key)&&e}return e},null,null)),r["ɵdid"](139264,null,0,s.NgClass,[r.IterableDiffers,r.KeyValueDiffers,r.ElementRef,r.Renderer],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),r["ɵpod"](["btn-danger text-white","btn-secondary"]),(l()(),r["ɵted"](null,["\n            "])),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵted"](null,["\n    "]))],function(l,n){l(n,11,0,"btn",l(n,12,0,null==n.context.$implicit?null:n.context.$implicit.value,!(null==n.context.$implicit?null:n.context.$implicit.value)))},function(l,n){l(n,6,0,null==n.context.$implicit?null:n.context.$implicit.title),l(n,8,0,null==n.context.$implicit?null:n.context.$implicit.description),l(n,10,0,"zet "+((null==n.context.$implicit?null:n.context.$implicit.value)?"uit":"aan"))})}function u(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,10,"div",[["class","row mb-4 justify-content-center"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵeld"](0,null,null,7,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,4,"ngb-alert",[],null,null,null,c.b,c.c)),r["ɵdid"](24576,null,0,d.a,[p.a],{dismissible:[0,"dismissible"],type:[1,"type"]},null),(l()(),r["ɵeld"](0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),r["ɵted"](null,["Let op!"])),(l()(),r["ɵted"](0,[" ",""])),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵted"](null,["\n"]))],function(l,n){l(n,5,0,!1,n.component.type)},function(l,n){l(n,8,0,n.component.message)})}function i(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵeld"](0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,1,"h1",[["class","page-title pb-3"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["Instellingen"])),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵted"](null,["\n"])),(l()(),r["ɵted"](null,["\n\n"])),(l()(),r["ɵeld"](0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵand"](8388608,null,null,1,null,e)),r["ɵdid"](401408,null,0,s.NgForOf,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),r["ɵted"](null,["\n"])),(l()(),r["ɵted"](null,["\n\n"])),(l()(),r["ɵeld"](0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵeld"](0,null,null,3,"div",[["class","col"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,0,"hr",[["class","mt-4 mb-5"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵted"](null,["\n"])),(l()(),r["ɵted"](null,["\n\n"])),(l()(),r["ɵeld"](0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵeld"](0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,1,"h2",[["class","pb-3"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["Voorraad uploaden"])),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵted"](null,["\n"])),(l()(),r["ɵted"](null,["\n\n"])),(l()(),r["ɵand"](8388608,null,null,1,null,u)),r["ɵdid"](8192,null,0,s.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),r["ɵted"](null,["\n\n"])),(l()(),r["ɵeld"](0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵeld"](0,null,null,22,"div",[["class","col"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,16,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n            "])),(l()(),r["ɵeld"](0,null,null,2,"label",[["class","col col-md-3 col-form-label"],["for","voorraad"]],null,null,null,null,null)),(l()(),r["ɵeld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),r["ɵted"](null,["Excel bestand voorraad"])),(l()(),r["ɵted"](null,["\n            "])),(l()(),r["ɵeld"](0,null,null,9,"div",[["class","col"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n                "])),(l()(),r["ɵeld"](0,null,null,0,"input",[["accept",".csv"],["aria-describedby","voorraadHelp"],["class","form-control-file"],["id","voorraad"],["type","file"]],null,[[null,"change"]],function(l,n,t){var e=!0,u=l.component;if("change"===n){e=!1!==u.voorraadLijst(t)&&e}return e},null,null)),(l()(),r["ɵted"](null,["\n                "])),(l()(),r["ɵeld"](0,null,null,4,"small",[["class","form-text text-muted"],["id","voorraadHelp"]],null,null,null,null,null)),(l()(),r["ɵted"](null,["Een voorbeeld bestand kan gedownload worden: "])),(l()(),r["ɵeld"](0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),r["ɵted"](null,["voorbeeldlijst"])),(l()(),r["ɵted"](null,["."])),(l()(),r["ɵted"](null,["\n            "])),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,1,"button",[["class","btn btn-secondary"],["type","submit"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!==u.voorraadUploaden()&&e}return e},null,null)),(l()(),r["ɵted"](null,["Voorraad uploaden"])),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵted"](null,["\n"])),(l()(),r["ɵted"](null,["\n"]))],function(l,n){var t=n.component;l(n,12,0,t.settings),l(n,33,0,t.message)},function(l,n){l(n,51,0,n.component.exampleFile)})}function o(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,1,"app-settings",[],null,null,null,i,v)),r["ɵdid"](2154496,null,0,_.a,[g.Title,f.a,h.a],null,null)],function(l,n){l(n,1,0)},null)}var a=t("Ix9z"),r=t("3j3K"),s=t("2Je8"),c=t("7ldD"),d=t("s28n"),p=t("gFLb"),_=t("TODj"),g=t("Qbdm"),f=t("Kyd9"),h=t("Ku9v");t.d(n,"a",function(){return m});var b=[a.a],v=r["ɵcrt"]({encapsulation:0,styles:b,data:{}}),m=r["ɵccf"]("app-settings",_.a,o,{},{},[])},S7dt:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},TODj:function(l,n,t){"use strict";var e=t("Qbdm"),u=t("Kyd9"),i=t("AljR"),o=t("kZql"),a=t("Ku9v"),r=t("bZY+");t.n(r);t.d(n,"a",function(){return d});var s=this&&this.__decorate||function(l,n,t,e){var u,i=arguments.length,o=i<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(l,n,t,e);else for(var a=l.length-1;a>=0;a--)(u=l[a])&&(o=(i<3?u(o):i>3?u(n,t,o):u(n,t))||o);return i>3&&o&&Object.defineProperty(n,t,o),o},c=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},d=function(){function l(l,n,t){this.titleService=l,this.settingsService=n,this.productsService=t,this.exampleFile=o.a.urlWithoutApi+"storage/producten.csv",this.type="success"}return l.prototype.ngOnInit=function(){this.titleService.setTitle("Instellingen — IPMEDT5A")},l.prototype.ngAfterViewInit=function(){var l=this;this.getSettings(),this.observable=r.IntervalObservable.create(5e3).subscribe(function(){l.getSettings()})},l.prototype.getSettings=function(){var l=this;this.settingsSubscription=this.settingsService.getSettings().subscribe(function(n){l.settings=n})},l.prototype.toggleSetting=function(l){var n=this;this.settingSubscription=this.settingsService.toggleSetting(l).subscribe(function(l){n.getSettings()})},l.prototype.voorraadLijst=function(l){this.file=l.target.files},l.prototype.voorraadUploaden=function(){var l=this;if(this.file){var n=new FormData;n.append("file",this.file[0],this.file[0].name),this.uploadSubscription=this.productsService.uploadProducts(n).subscribe(function(n){l.message="Het uploaden van de nieuwe producten is gelukt."},function(n){l.message="Er is iets fout gegaan...",l.type="danger"})}},l.ctorParameters=function(){return[{type:e.Title},{type:u.a},{type:a.a}]},l.ctorParameters=function(){return[{type:e.Title},{type:u.a},{type:a.a}]},l}();d=s([t.i(i.a)(),c("design:paramtypes",["function"==typeof(p=void 0!==e.Title&&e.Title)&&p||Object,"function"==typeof(_=void 0!==u.a&&u.a)&&_||Object,"function"==typeof(g=void 0!==a.a&&a.a)&&g||Object])],d);var p,_,g}});