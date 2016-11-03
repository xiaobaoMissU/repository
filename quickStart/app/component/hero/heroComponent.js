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
 * Created by PC-ZB on 2016/10/28.
 */
var core_1 = require('@angular/core');
var heroService_1 = require('../../service/heroService');
var HeroComponent = (function () {
    function HeroComponent(heroService) {
        this.heroService = heroService;
    }
    HeroComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (sss) { return _this.heroes = sss; });
    };
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'myHeroes',
            styleUrls: ['app/css/heros.css'],
            template: "\n        <h2>My Heros:</h2>\n        <ul class=\"heroes\">\n            <li (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\" *ngFor=\"let hero of heroes\"><span class=\"badge\">{{hero.id}}</span><span>{{hero.name}}</span></li>\n        </ul>\n        <hero-detail *ngIf=\"selectedHero\" [hero]=\"selectedHero\"></hero-detail>\n         "
        }), 
        __metadata('design:paramtypes', [heroService_1.HeroService])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
