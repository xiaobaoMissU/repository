/**
 * Created by PC-ZB on 2016/10/28.
 */
"use strict";
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        var heroes = [
            { id: 1, name: 'heroA' },
            { id: 2, name: 'heroB' },
            { id: 3, name: 'heroC' },
            { id: 4, name: 'heroD' },
            { id: 5, name: 'heroE' }
        ];
        return Promise.resolve(heroes);
    };
    return HeroService;
}());
exports.HeroService = HeroService;
