/**
 * Created by PC-ZB on 2016/10/28.
 */
"use strict";
var HeroService = (function () {
    function HeroService() {
        this.heroes = [
            { id: 1, name: 'heroA' },
            { id: 2, name: 'heroB' },
            { id: 3, name: 'heroC' },
            { id: 4, name: 'heroD' },
            { id: 5, name: 'heroE' }
        ];
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(this.heroes);
    };
    HeroService.prototype.getHeroById = function (id) {
        return Promise.resolve(this.heroes.find(function (hero) {
            if (hero.id == id) {
                return hero;
            }
        }));
    };
    return HeroService;
}());
exports.HeroService = HeroService;
