webpackJsonp([0,9],{"5OM8":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},"5Pn+":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},HkLZ:function(n,l,t){"use strict";var e=t("bZY+"),u=(t.n(e),t("p/GT"));t.d(l,"a",function(){return a});var a=function(){function n(n){this.statisticsService=n,this.chartType="pie",this.title="Acties"}return n.prototype.data=function(){var n=this;this.statisticsService.getActionsCount().subscribe(function(l){n.pieChartLabels=[],n.pieChartData=[];for(var t=0,e=l;t<e.length;t++){var u=e[t];n.pieChartLabels.push(u.name),n.pieChartData.push(u.statistics_count)}})},n.prototype.ngOnInit=function(){this.data()},n.prototype.ngAfterViewInit=function(){var n=this;this.observable=e.IntervalObservable.create(2e3).subscribe(function(){n.data()})},n.prototype.ngOnDestroy=function(){this.observable.unsubscribe()},n.ctorParameters=function(){return[{type:u.a}]},n}()},I9gn:function(n,l,t){"use strict";var e=t("bZY+"),u=(t.n(e),t("p/GT"));t.d(l,"a",function(){return a});var a=function(){function n(n){this.statisticsService=n,this.lineChartType="bar",this.title="Gescanned vandaag",this.lineChartOptions={scaleBeginAtZero:!0}}return n.prototype.data=function(){var n=this;this.statisticsService.getScannedTodayGroupedByHour().subscribe(function(l){for(var t=[],e=[],u=0,a=l;u<a.length;u++){var i=a[u];t.push(i.aantal),e.push(i.uur)}n.lineChartData=[{data:t,label:"Maten"}],n.lineChartLabels=e})},n.prototype.ngOnInit=function(){this.data()},n.prototype.ngAfterViewInit=function(){var n=this;this.observable=e.IntervalObservable.create(2e3).subscribe(function(){n.data()})},n.prototype.ngOnDestroy=function(){this.observable.unsubscribe()},n.ctorParameters=function(){return[{type:u.a}]},n}()},JBGx:function(n,l,t){"use strict";var e=t("bZY+"),u=(t.n(e),t("p/GT"));t.d(l,"a",function(){return a});var a=function(){function n(n){this.statisticsService=n,this.lineChartType="bar",this.title="Ingedrukt vandaag",this.lineChartOptions={scaleBeginAtZero:!0}}return n.prototype.data=function(){var n=this;this.statisticsService.getPressedTodayGroupedByHour().subscribe(function(l){for(var t=[],e=[],u=0,a=l;u<a.length;u++){var i=a[u];t.push(i.aantal),e.push(i.uur)}n.lineChartData=[{data:t,label:"Knoppen"}],n.lineChartLabels=e})},n.prototype.ngOnInit=function(){this.data()},n.prototype.ngAfterViewInit=function(){var n=this;this.observable=e.IntervalObservable.create(2e3).subscribe(function(){n.data()})},n.prototype.ngOnDestroy=function(){this.observable.unsubscribe()},n.ctorParameters=function(){return[{type:u.a}]},n}()},KURT:function(n,l,t){"use strict";function e(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"canvas",[["baseChart","baseChart"]],null,null,null,null,null)),r["ɵdid"](368640,null,0,o.BaseChartDirective,[r.ElementRef],{data:[0,"data"],labels:[1,"labels"],chartType:[2,"chartType"]},null)],function(n,l){var t=l.component;n(l,1,0,t.pieChartData,t.pieChartLabels,t.chartType)},null)}function u(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,11,"div",[["class","card"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,8,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n        "])),(n()(),r["ɵeld"](0,null,null,0,"h5",[["class","card-title"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),r["ɵted"](null,["\n        "])),(n()(),r["ɵeld"](0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n        "])),(n()(),r["ɵand"](8388608,null,null,1,null,e)),r["ɵdid"](8192,null,0,s.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵted"](null,["\n"])),(n()(),r["ɵted"](null,["\n"]))],function(n,l){n(l,9,0,l.component.pieChartData)},function(n,l){n(l,4,0,l.component.title)})}function a(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"app-vergelijking-acties",[],null,null,null,u,p)),r["ɵdid"](2220032,null,0,c.a,[d.a],null,null)],function(n,l){n(l,1,0)},null)}var i=t("5OM8"),r=t("3j3K"),o=t("GRaa"),s=(t.n(o),t("2Je8")),c=t("HkLZ"),d=t("p/GT");t.d(l,"b",function(){return p}),l.a=u;var h=[i.a],p=r["ɵcrt"]({encapsulation:0,styles:h,data:{}});r["ɵccf"]("app-vergelijking-acties",c.a,a,{},{},[])},NVCZ:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},RlQN:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("3j3K"),u=t("lXXI"),a=t("2Je8"),i=t("eCJc"),r=t("RX2M"),o=t("M0cT"),s=t("/I96"),c=t("vfkA"),d=t("NVOs"),h=t("qsK9"),p=t("MSQt"),b=t("UyZi"),f=t("Ep2y"),_=t("WKBe"),g=t("1Z2I"),v=t("A8b0"),y=t("as+d"),M=t("62nT"),C=t("yDyO"),m=t("K/oD"),w=t("kzcK"),N=t("GRaa"),T=(t.n(N),t("5oXY")),O=t("3kwk"),k=t("p/GT"),I=t("7ldD"),D=t("2NoN"),L=t("xiEB"),S=t("SDm3"),R=t("jtp5"),G=t("h+Bk"),j=t("IiyU"),P=t("k6Lt"),B=t("CXHW"),A=t("Fzro"),Z=t("cikh"),H=t("n0yc");t.d(l,"DashboardModuleNgFactory",function(){return U});var K=this&&this.__extends||function(n,l){function t(){this.constructor=n}for(var e in l)l.hasOwnProperty(e)&&(n[e]=l[e]);n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)},J=function(n){function l(l){return n.call(this,l,[I.a,D.a,L.a,S.a,R.a,G.a,j.a,P.a],[])||this}return K(l,n),Object.defineProperty(l.prototype,"_NgLocalization_23",{get:function(){return null==this.__NgLocalization_23&&(this.__NgLocalization_23=new a.NgLocaleLocalization(this.parent.get(e.LOCALE_ID))),this.__NgLocalization_23},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_24",{get:function(){return null==this.__ɵi_24&&(this.__ɵi_24=new d.a),this.__ɵi_24},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_NgbModal_25",{get:function(){return null==this.__NgbModal_25&&(this.__NgbModal_25=new O.a(this.componentFactoryResolver,this,this.parent.get(B.a))),this.__NgbModal_25},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_StatisticsService_27",{get:function(){return null==this.__StatisticsService_27&&(this.__StatisticsService_27=new k.a(this.parent.get(A.k))),this.__StatisticsService_27},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new a.CommonModule,this._NgbAccordionModule_1=new i.a,this._NgbAlertModule_2=new r.a,this._NgbButtonsModule_3=new o.a,this._NgbCarouselModule_4=new s.a,this._NgbCollapseModule_5=new c.a,this._ɵba_6=new d.c,this._FormsModule_7=new d.d,this._NgbDatepickerModule_8=new h.a,this._NgbDropdownModule_9=new p.a,this._NgbModalModule_10=new b.a,this._NgbPaginationModule_11=new f.a,this._NgbPopoverModule_12=new _.a,this._NgbProgressbarModule_13=new g.a,this._NgbRatingModule_14=new v.a,this._NgbTabsetModule_15=new y.a,this._NgbTimepickerModule_16=new M.a,this._NgbTooltipModule_17=new C.a,this._NgbTypeaheadModule_18=new m.a,this._NgbModule_19=new w.b,this._ChartsModule_20=new N.ChartsModule,this._RouterModule_21=new T.q(this.parent.get(T.r,null),this.parent.get(T.j,null)),this._DashboardModule_22=new u.a,this._ROUTES_26=[[{path:"",component:Z.a,pathMatch:"full",canActivate:[H.a]}]],this._DashboardModule_22},l.prototype.getInternal=function(n,l){return n===a.CommonModule?this._CommonModule_0:n===i.a?this._NgbAccordionModule_1:n===r.a?this._NgbAlertModule_2:n===o.a?this._NgbButtonsModule_3:n===s.a?this._NgbCarouselModule_4:n===c.a?this._NgbCollapseModule_5:n===d.c?this._ɵba_6:n===d.d?this._FormsModule_7:n===h.a?this._NgbDatepickerModule_8:n===p.a?this._NgbDropdownModule_9:n===b.a?this._NgbModalModule_10:n===f.a?this._NgbPaginationModule_11:n===_.a?this._NgbPopoverModule_12:n===g.a?this._NgbProgressbarModule_13:n===v.a?this._NgbRatingModule_14:n===y.a?this._NgbTabsetModule_15:n===M.a?this._NgbTimepickerModule_16:n===C.a?this._NgbTooltipModule_17:n===m.a?this._NgbTypeaheadModule_18:n===w.b?this._NgbModule_19:n===N.ChartsModule?this._ChartsModule_20:n===T.q?this._RouterModule_21:n===u.a?this._DashboardModule_22:n===a.NgLocalization?this._NgLocalization_23:n===d.a?this._ɵi_24:n===O.a?this._NgbModal_25:n===T.u?this._ROUTES_26:n===k.a?this._StatisticsService_27:l},l.prototype.destroyInternal=function(){},l}(e["ɵNgModuleInjector"]),U=new e.NgModuleFactory(J,u.a)},SB3M:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},Wd7m:function(n,l,t){"use strict";var e=t("bZY+"),u=(t.n(e),t("p/GT"));t.d(l,"a",function(){return a});var a=function(){function n(n){this.statisticsService=n,this.lineChartType="bar",this.title="Opgepakt vandaag",this.lineChartOptions={scaleBeginAtZero:!0}}return n.prototype.data=function(){var n=this;this.statisticsService.getPickedUpTodayGroupedByHour().subscribe(function(l){for(var t=[],e=[],u=0,a=l;u<a.length;u++){var i=a[u];t.push(i.aantal),e.push(i.uur)}n.lineChartData=[{data:t,label:"Schoenen"}],n.lineChartLabels=e})},n.prototype.ngOnInit=function(){this.data()},n.prototype.ngAfterViewInit=function(){var n=this;this.observable=e.IntervalObservable.create(2e3).subscribe(function(){n.data()})},n.prototype.ngOnDestroy=function(){this.observable.unsubscribe()},n.ctorParameters=function(){return[{type:u.a}]},n}()},cikh:function(n,l,t){"use strict";var e=t("Qbdm");t.d(l,"a",function(){return u});var u=function(){function n(n){this.titleService=n}return n.prototype.ngOnInit=function(){this.titleService.setTitle("Dashboard — IPMEDT5A")},n.ctorParameters=function(){return[{type:e.Title}]},n}()},k6Lt:function(n,l,t){"use strict";function e(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵeld"](0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,1,"h2",[["class","page-title pb-3"]],null,null,null,null,null)),(n()(),i["ɵted"](null,["Dashboard"])),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵted"](null,["\n"])),(n()(),i["ɵted"](null,["\n\n"])),(n()(),i["ɵeld"](0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵeld"](0,null,null,4,"div",[["class","col-4 pb-4"]],null,null,null,null,null)),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,1,"app-vergelijking-acties",[],null,null,null,r.a,r.b)),i["ɵdid"](2220032,null,0,o.a,[s.a],null,null),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵeld"](0,null,null,4,"div",[["class","col-4 pb-4"]],null,null,null,null,null)),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,1,"app-opgepakt-vandaag",[],null,null,null,c.a,c.b)),i["ɵdid"](2220032,null,0,d.a,[s.a],null,null),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵeld"](0,null,null,4,"div",[["class","col-4 pb-4"]],null,null,null,null,null)),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,1,"app-gescand-vandaag",[],null,null,null,h.a,h.b)),i["ɵdid"](2220032,null,0,p.a,[s.a],null,null),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵeld"](0,null,null,4,"div",[["class","col-4 pb-4"]],null,null,null,null,null)),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,1,"app-ingedrukt-vandaag",[],null,null,null,b.a,b.b)),i["ɵdid"](2220032,null,0,f.a,[s.a],null,null),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵted"](null,["\n"]))],function(n,l){n(l,14,0),n(l,20,0),n(l,26,0),n(l,32,0)},null)}function u(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,null,null,1,"app-dashboard",[],null,null,null,e,y)),i["ɵdid"](57344,null,0,_.a,[g.Title],null,null)],function(n,l){n(l,1,0)},null)}var a=t("5Pn+"),i=t("3j3K"),r=t("KURT"),o=t("HkLZ"),s=t("p/GT"),c=t("koLj"),d=t("Wd7m"),h=t("wCtc"),p=t("I9gn"),b=t("qYA5"),f=t("JBGx"),_=t("cikh"),g=t("Qbdm");t.d(l,"a",function(){return M});var v=[a.a],y=i["ɵcrt"]({encapsulation:0,styles:v,data:{}}),M=i["ɵccf"]("app-dashboard",_.a,u,{},{},[])},koLj:function(n,l,t){"use strict";function e(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"canvas",[["baseChart","baseChart"],["height","300"],["width","300"]],null,null,null,null,null)),r["ɵdid"](368640,null,0,o.BaseChartDirective,[r.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null)],function(n,l){var t=l.component;n(l,1,0,t.lineChartData,t.lineChartLabels,t.lineChartOptions,t.lineChartType)},null)}function u(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,11,"div",[["class","card"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n  "])),(n()(),r["ɵeld"](0,null,null,8,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,0,"h5",[["class","card-title"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵand"](8388608,null,null,1,null,e)),r["ɵdid"](8192,null,0,s.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),r["ɵted"](null,["\n  "])),(n()(),r["ɵted"](null,["\n"])),(n()(),r["ɵted"](null,["\n"]))],function(n,l){n(l,9,0,l.component.lineChartData)},function(n,l){n(l,4,0,l.component.title)})}function a(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"app-opgepakt-vandaag",[],null,null,null,u,p)),r["ɵdid"](2220032,null,0,c.a,[d.a],null,null)],function(n,l){n(l,1,0)},null)}var i=t("NVCZ"),r=t("3j3K"),o=t("GRaa"),s=(t.n(o),t("2Je8")),c=t("Wd7m"),d=t("p/GT");t.d(l,"b",function(){return p}),l.a=u;var h=[i.a],p=r["ɵcrt"]({encapsulation:0,styles:h,data:{}});r["ɵccf"]("app-opgepakt-vandaag",c.a,a,{},{},[])},lXXI:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},"p/GT":function(n,l,t){"use strict";var e=t("Fzro"),u=t("kZql"),a=t("Gvdl");t.n(a);t.d(l,"a",function(){return i});var i=function(){function n(n){this.http=n;var l=new e.l;l.append("Authorization","Bearer "+localStorage.getItem("token")),this.getOptions=new e.j({headers:l})}return n.prototype.getActionsCount=function(){return this.http.get(u.a.url+"statistics/actions/count",this.getOptions).map(function(n){return n.json()}).map(function(n){return n.data}).catch(function(n){return 401==n.status?a.Observable.throw(n.status):500==n.status?a.Observable.throw(n.status):void 0})},n.prototype.getPickedUpTodayGroupedByHour=function(){return this.http.get(u.a.url+"statistics/custom/picked_up_today_grouped_by_hour",this.getOptions).map(function(n){return n.json()}).map(function(n){return n.data}).catch(function(n){return 401==n.status?a.Observable.throw(n.status):500==n.status?a.Observable.throw(n.status):void 0})},n.prototype.getScannedTodayGroupedByHour=function(){return this.http.get(u.a.url+"statistics/custom/scanned_today_grouped_by_hour",this.getOptions).map(function(n){return n.json()}).map(function(n){return n.data}).catch(function(n){return 401==n.status?a.Observable.throw(n.status):500==n.status?a.Observable.throw(n.status):void 0})},n.prototype.getPressedTodayGroupedByHour=function(){return this.http.get(u.a.url+"statistics/custom/pressed_today_grouped_by_hour",this.getOptions).map(function(n){return n.json()}).map(function(n){return n.data}).catch(function(n){return 401==n.status?a.Observable.throw(n.status):500==n.status?a.Observable.throw(n.status):void 0})},n.ctorParameters=function(){return[{type:e.k}]},n}()},qYA5:function(n,l,t){"use strict";function e(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"canvas",[["baseChart","baseChart"],["height","300"],["width","300"]],null,null,null,null,null)),r["ɵdid"](368640,null,0,o.BaseChartDirective,[r.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null)],function(n,l){var t=l.component;n(l,1,0,t.lineChartData,t.lineChartLabels,t.lineChartOptions,t.lineChartType)},null)}function u(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,11,"div",[["class","card"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n  "])),(n()(),r["ɵeld"](0,null,null,8,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,0,"h5",[["class","card-title"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵand"](8388608,null,null,1,null,e)),r["ɵdid"](8192,null,0,s.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),r["ɵted"](null,["\n  "])),(n()(),r["ɵted"](null,["\n"])),(n()(),r["ɵted"](null,["\n"]))],function(n,l){n(l,9,0,l.component.lineChartData)},function(n,l){n(l,4,0,l.component.title)})}function a(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"app-ingedrukt-vandaag",[],null,null,null,u,p)),r["ɵdid"](2220032,null,0,c.a,[d.a],null,null)],function(n,l){n(l,1,0)},null)}var i=t("uUJU"),r=t("3j3K"),o=t("GRaa"),s=(t.n(o),t("2Je8")),c=t("JBGx"),d=t("p/GT");t.d(l,"b",function(){return p}),l.a=u;var h=[i.a],p=r["ɵcrt"]({encapsulation:0,styles:h,data:{}});r["ɵccf"]("app-ingedrukt-vandaag",c.a,a,{},{},[])},uUJU:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},wCtc:function(n,l,t){"use strict";function e(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"canvas",[["baseChart","baseChart"],["height","300"],["width","300"]],null,null,null,null,null)),r["ɵdid"](368640,null,0,o.BaseChartDirective,[r.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null)],function(n,l){var t=l.component;n(l,1,0,t.lineChartData,t.lineChartLabels,t.lineChartOptions,t.lineChartType)},null)}function u(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,11,"div",[["class","card"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n  "])),(n()(),r["ɵeld"](0,null,null,8,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,0,"h5",[["class","card-title"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵeld"](0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),r["ɵted"](null,["\n    "])),(n()(),r["ɵand"](8388608,null,null,1,null,e)),r["ɵdid"](8192,null,0,s.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),r["ɵted"](null,["\n  "])),(n()(),r["ɵted"](null,["\n"])),(n()(),r["ɵted"](null,["\n"]))],function(n,l){n(l,9,0,l.component.lineChartData)},function(n,l){n(l,4,0,l.component.title)})}function a(n){return r["ɵvid"](0,[(n()(),r["ɵeld"](0,null,null,1,"app-gescand-vandaag",[],null,null,null,u,p)),r["ɵdid"](2220032,null,0,c.a,[d.a],null,null)],function(n,l){n(l,1,0)},null)}var i=t("SB3M"),r=t("3j3K"),o=t("GRaa"),s=(t.n(o),t("2Je8")),c=t("I9gn"),d=t("p/GT");t.d(l,"b",function(){return p}),l.a=u;var h=[i.a],p=r["ɵcrt"]({encapsulation:0,styles:h,data:{}});r["ɵccf"]("app-gescand-vandaag",c.a,a,{},{},[])}});