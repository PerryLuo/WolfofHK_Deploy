webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/action/action.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr{\n    border-width: 2px;\n    border-color:gray;\n    width:200px;\n}\n\n.wrapper {\n\t/* width: 420px; */\n\theight: 600px;\n\tmargin: 10px;\n\tbackground-color: #132c40;\n\tcolor: white;\n\tpadding: 15px 50px 10px 50px;\n\tborder-radius: 5px;\n}\n\nh1 {\n\tfont-size: 24px;\n\tcolor: #85c1cc;\n\tpadding: 0;\n}\n\n.label {\n    color: #a5bdc1;\n    font-size: 15px;\n    font-family: Arial;\n}\n\n.value {\n    color: white;\n    font-family: Arial;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/action/action.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h2>Action</h2>\n  <hr>\n  <br>\n  <form #tradeForm=ngForm>\n    <div class='form-group'>\n        <label>Trading Pair: Based Currency-Buy/Sell Currency</label>\n        <input type='text' class=\"form-control\" placeholder=\"(e.g., BTC-LTC)\" name=\"tradePair\" ngModel>\n    </div>\n    <div class='form-group'>\n        <label>Quantity to Buy/Sell</label>\n        <br>\n        <input type='text' placeholder=\"(e.g., 2.234)\" name=\"quantity\" ngModel>\n    </div>\n    <div class='form-group'>\n        <label>Execute Buy/Sell Limit Price</label>\n        <br>\n        <input type='text' placeholder=\"(e.g., 70.5)\" name=\"priceLimit\" ngModel>\n    </div>\n    <button  class=\"btn btn-info btn-lg\" (click)='onSubmit(tradeForm.value, \"buy\")'>Buy Limit</button>\n    <button  class=\"btn btn-primary btn-lg\" (click)='onSubmit(tradeForm.value, \"sell\")'>Sell Limit</button>\n  </form>\n    <br>\n    <h4>Order Status</h4>\n    <hr>\n    <h5>\n       Buy Order Status: {{buyOrderInfoMsg}}\n       <br>\n       <br>\n       Sell Order Status: {{sellOrderInfoMsg}}\n    </h5>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/action/action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__call_exchange_service__ = __webpack_require__("../../../../../src/app/call-exchange.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionComponent = (function () {
    function ActionComponent(callExchangeService) {
        this.callExchangeService = callExchangeService;
        this.buyOrderInfoMsg = "";
        this.sellOrderInfoMsg = "";
    }
    ActionComponent.prototype.ngOnInit = function () {
    };
    ActionComponent.prototype.onSubmit = function (value, event) {
        var _this = this;
        console.log(value);
        console.log(event);
        this.callExchangeService.sendExchangeTrade(value, event)
            .subscribe(function (response) {
            console.log(response);
            if (response.json().success === true && event === 'buy') {
                _this.buyOrderInfoMsg = "Buy Order Successful - Transaction #" + response.result.uuid;
            }
            else if (response.json().success === false && event === 'buy') {
                _this.buyOrderInfoMsg = "Buy Order Unsuccessful";
            }
            else if (response.json().message && event === 'buy') {
                _this.buyOrderInfoMsg = response.json().message;
            }
            if (response.json().success === true && event === 'sell') {
                _this.sellOrderInfoMsg = "Sell Order Successful - Transaction #" + response.result.uuid;
            }
            else if (response.json().success === false && event === 'sell') {
                _this.sellOrderInfoMsg = "Sell Order Unsuccessful";
            }
            else if (response.json().message && event === 'sell') {
                _this.sellOrderInfoMsg = response.json().message;
            }
        }, function (error) { return console.log(error); });
    };
    return ActionComponent;
}());
ActionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-action',
        template: __webpack_require__("../../../../../src/app/action/action.component.html"),
        styles: [__webpack_require__("../../../../../src/app/action/action.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__call_exchange_service__["a" /* callExcService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__call_exchange_service__["a" /* callExcService */]) === "function" && _a || Object])
], ActionComponent);

var _a;
//# sourceMappingURL=action.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n    color: white;\n    margin-top: 0px;\n}\n\ndiv{\n    text-align: center\n}\n\nstrong{\n    font-style: italic;\n    margin-top:10px;\n    font-size:110%\n}\n\n#quote1{\n    margin-left: -420px;\n}\n\n#quote2{\n    margin-left: 300px;\n}\n\n#quote3{\n    margin-left: 350px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <br>\n  <h1>{{title}}</h1>\n  <br>\n  <img src=\"../../assets/wolfofWS.jpg\">\n  <br>\n  <strong id=\"quote1\">“The only thing standing between you and your goal is... </strong>\n  <br>\n  <strong id=\"quote2\">the bullshit story you keep telling yourself as to why you can't achieve it.” </strong>\n  <br>  \n  <strong id=\"quote3\">― Jordan Belfort</strong>\n\n  <app-crypto></app-crypto>\n \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'The Wolf of Hong Kong';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: []
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crypto_crypto_component__ = __webpack_require__("../../../../../src/app/crypto/crypto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__currency_currency_component__ = __webpack_require__("../../../../../src/app/currency/currency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__price_price_component__ = __webpack_require__("../../../../../src/app/price/price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__strategy_strategy_component__ = __webpack_require__("../../../../../src/app/strategy/strategy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__action_action_component__ = __webpack_require__("../../../../../src/app/action/action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__crypto_compare_socket_service__ = __webpack_require__("../../../../../src/app/crypto-compare-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__call_exchange_service__ = __webpack_require__("../../../../../src/app/call-exchange.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__crypto_crypto_component__["a" /* CryptoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__currency_currency_component__["a" /* CurrencyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__price_price_component__["a" /* PriceComponent */],
            __WEBPACK_IMPORTED_MODULE_8__strategy_strategy_component__["a" /* StrategyComponent */],
            __WEBPACK_IMPORTED_MODULE_9__action_action_component__["a" /* ActionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__status_status_component__["a" /* StatusComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__crypto_compare_socket_service__["a" /* CryptoCompareSocketService */], __WEBPACK_IMPORTED_MODULE_12__call_exchange_service__["a" /* callExcService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/call-exchange.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return callExcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var callExcService = (function () {
    function callExcService(http) {
        this.http = http;
    }
    callExcService.prototype.callExchangeInfo = function () {
        return this.http.get('/api/callExchangeInfo');
    };
    callExcService.prototype.sendExchangeTrade = function (value, event) {
        if (event === 'buy') {
            return this.http.post('/api/sendExchangeTradeBuy', value);
        }
        if (event === 'sell') {
            return this.http.post('/api/sendExchangeTradeSell', value);
        }
    };
    return callExcService;
}());
callExcService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], callExcService);

var _a;
//# sourceMappingURL=call-exchange.service.js.map

/***/ }),

/***/ "../../../../../src/app/crypto-compare-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoCompareSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CryptoCompareSocketService = (function () {
    function CryptoCompareSocketService() {
        var _this = this;
        this.liveData = new Map();
        console.log('socket connected');
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__('https://streamer.cryptocompare.com/');
        this.socket.emit('SubAdd', { subs: ['2~Poloniex~BTC~USD'] });
        this.socket.emit('SubAdd', { subs: ['2~Poloniex~ETH~USD'] });
        this.socket.emit('SubAdd', { subs: ['2~Poloniex~LTC~USD'] });
        this.socket.emit('SubAdd', { subs: ['2~Poloniex~BCH~USD'] });
        this.socket.emit('SubAdd', { subs: ['2~Poloniex~DASH~USD'] });
        this.liveDataObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on("m", function (message) {
                var currencyInfo = message.split('~');
                var exchange = currencyInfo[1];
                var currencyPair = currencyInfo[2] + '~' + currencyInfo[3];
                var priceUSD = (Math.round(currencyInfo[5] * 100) / 100).toFixed(2);
                _this.liveData.set(currencyPair, { "exchange": exchange, "currencyPair": currencyPair, "priceUSD": priceUSD });
                if (currencyPair != 'undefined~undefined') {
                    observer.next(_this.liveData.get(currencyPair));
                }
                console.log(exchange);
                console.log(currencyPair);
                console.log(priceUSD);
            });
        });
    }
    CryptoCompareSocketService.prototype.getLiveData = function () {
        return this.liveDataObservable;
    };
    return CryptoCompareSocketService;
}());
CryptoCompareSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CryptoCompareSocketService);

//# sourceMappingURL=crypto-compare-socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/crypto/crypto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crypto/crypto.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <app-currency></app-currency>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/crypto/crypto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CryptoComponent = (function () {
    function CryptoComponent() {
    }
    CryptoComponent.prototype.ngOnInit = function () {
    };
    return CryptoComponent;
}());
CryptoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-crypto',
        template: __webpack_require__("../../../../../src/app/crypto/crypto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/crypto/crypto.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CryptoComponent);

//# sourceMappingURL=crypto.component.js.map

/***/ }),

/***/ "../../../../../src/app/currency/currency.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currency/currency.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"background\" class=\"container-fluid\">\n    <div class=\"row\">\n        <br>\n        <br>\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n            <app-price [currencyLiveInfoChild]='currencyLiveInfoParent'></app-price>\n        </div>\n        <!-- <div class=\"col-md-3 col-sm-12\">\n            <app-strategy></app-strategy>\n        </div> -->\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n            <app-action></app-action>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n            <app-status></app-status>\n        </div>\n    </div>\n</div>\n \n\n"

/***/ }),

/***/ "../../../../../src/app/currency/currency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crypto_compare_socket_service__ = __webpack_require__("../../../../../src/app/crypto-compare-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyComponent = (function () {
    function CurrencyComponent(cryptoCompareSocketService) {
        this.cryptoCompareSocketService = cryptoCompareSocketService;
        this.currencyLiveInfoParent = [
            ['BTC~USD', {}],
            ['ETH~USD', {}],
            ['LTC~USD', {}],
            ['BCH~USD', {}],
            ['DASH~USD', {}]
        ];
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cryptoCompareSocketService.getLiveData()
            .subscribe(function (liveData) {
            var found = _this.currencyLiveInfoParent.find(function (element) {
                return element[0] === liveData['currencyPair'];
            });
            found[1] = liveData;
        });
    };
    return CurrencyComponent;
}());
CurrencyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-currency',
        template: __webpack_require__("../../../../../src/app/currency/currency.component.html"),
        styles: [__webpack_require__("../../../../../src/app/currency/currency.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__crypto_compare_socket_service__["a" /* CryptoCompareSocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__crypto_compare_socket_service__["a" /* CryptoCompareSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__crypto_compare_socket_service__["a" /* CryptoCompareSocketService */]) === "function" && _a || Object])
], CurrencyComponent);

var _a;
//# sourceMappingURL=currency.component.js.map

/***/ }),

/***/ "../../../../../src/app/price/price.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr{\n    border-width: 2px;\n    border-color:gray;\n    width:200px;\n}\n\n.wrapper {\n\t/* width: 420px; */\n\theight: 600px;\n\tmargin: 10px;\n\tbackground-color: #132c40;\n\tcolor: white;\n\tpadding: 15px 50px 10px 50px;\n\tborder-radius: 5px;\n}\n\nh1 {\n\tfont-size: 24px;\n\tcolor: #85c1cc;\n\tpadding: 0;\n}\n\n.label {\n    color: #a5bdc1;\n    font-size: 15px;\n    font-family: Arial;\n}\n\n.value {\n    color: white;\n    font-family: Arial;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/price/price.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n        <h3 id=\"crypto_price\">Pricing</h3>\n    <hr>\n    <h4 *ngFor=\"let liveInfo of currencyLiveInfoChild\">\n        <div class=\"label\">\n             Exchange:\n             <span class=\"value\">{{liveInfo[1].exchange}}</span>\n        </div>\n        <div class=\"label\">\n             Currency Pair:\n            <span class=\"value\">{{liveInfo[1].currencyPair}}</span>\n        </div>\n        <div class=\"label\">\n             Price-USD:\n            <span class=\"value\">${{liveInfo[1].priceUSD}}</span>\n        </div>\n    </h4>\n    <!-- <h3>24hr Low-Price</h3>\n    <h3>24hr High-Price</h3> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/price/price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceComponent = (function () {
    function PriceComponent() {
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    return PriceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], PriceComponent.prototype, "currencyLiveInfoChild", void 0);
PriceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-price',
        template: __webpack_require__("../../../../../src/app/price/price.component.html"),
        styles: [__webpack_require__("../../../../../src/app/price/price.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PriceComponent);

//# sourceMappingURL=price.component.js.map

/***/ }),

/***/ "../../../../../src/app/status/status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr{\n    border-width: 2px;\n    border-color:gray;\n    width:200px;\n}\n\n.wrapper {\n\t/* width: 420px; */\n\theight: 600px;\n\tmargin: 10px;\n\tbackground-color: #132c40;\n\tcolor: white;\n\tpadding: 15px 50px 10px 50px;\n\tborder-radius: 5px;\n}\n\nh1 {\n\tfont-size: 24px;\n\tcolor: #85c1cc;\n\tpadding: 0;\n}\n\n.label {\n    color: #a5bdc1;\n    font-size: 15px;\n    font-family: Arial;\n}\n\n.value {\n    color: white;\n    font-family: Arial;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h3>Bittrex - Wallet Balance</h3>\n  <h4 *ngFor=\"let info of walletInfo\">\n      <hr>\n      <div class=\"label\">\n          Currency:\n          <span class=\"value\">{{info.Currency}}</span>\n     </div>\n     <div class=\"label\">\n         Total Balance:\n         <span class=\"value\">{{info.Balance}}</span>\n     </div>\n     <div class=\"label\">\n         Available:\n         <span class=\"value\">{{info.Available}}</span>\n     </div>\n     <div class=\"label\">\n        Pending:\n        <span class=\"value\">{{info.Pending}}</span>\n    </div>\n  </h4>\n</div> \n  <!-- <h5>Purchase Cost</h5>\n  <h5>Market Value</h5>\n  <h5>Percentage Change</h5> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__call_exchange_service__ = __webpack_require__("../../../../../src/app/call-exchange.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusComponent = (function () {
    function StatusComponent(callExchangeService) {
        this.callExchangeService = callExchangeService;
        this.walletInfo = [];
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callExchangeService.callExchangeInfo()
            .subscribe(function (walletData) {
            console.log(walletData.json());
            _this.walletInfo = walletData.json();
        });
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-status',
        template: __webpack_require__("../../../../../src/app/status/status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status/status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__call_exchange_service__["a" /* callExcService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__call_exchange_service__["a" /* callExcService */]) === "function" && _a || Object])
], StatusComponent);

var _a;
//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/app/strategy/strategy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr{\n    border-width: 2px;\n    border-color:gray;\n    width:200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/strategy/strategy.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Trading Strategy</h2>\n  <hr>\n  <h3>1 Minute</h3>\n  <h3>1 Hour</h3>\n  <h3>4 Hours</h3>\n</div>"

/***/ }),

/***/ "../../../../../src/app/strategy/strategy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrategyComponent = (function () {
    function StrategyComponent() {
    }
    StrategyComponent.prototype.ngOnInit = function () {
    };
    return StrategyComponent;
}());
StrategyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-strategy',
        template: __webpack_require__("../../../../../src/app/strategy/strategy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/strategy/strategy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StrategyComponent);

//# sourceMappingURL=strategy.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map