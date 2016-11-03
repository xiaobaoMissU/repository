"use strict";
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
 * Created by PC-ZB on 2016/11/3.
 */
var core_1 = require('@angular/core');
var heroService_1 = require('../../service/heroService');
var Dashboard = (function () {
    function Dashboard(heroService) {
        this.heroService = heroService;
    }
    Dashboard.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.topHeroes = heroes.slice(0, 3); });
    };
    Dashboard = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n        <h3>\u6211\u7684\u4EEA\u8868\u76D8</h3>\n        <div *ngFor=\"let hero of topHeroes\">\n            {{hero.name}}\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [heroService_1.HeroService])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
