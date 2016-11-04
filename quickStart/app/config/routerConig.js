"use strict";
/**
 * Created by PC-ZB on 2016/11/3.
 */
var heroComponent_1 = require('../component/hero/heroComponent');
var heroDetailComponent_1 = require('../component/herodetail/heroDetailComponent');
var dashboardComponent_1 = require('../component/dashboard/dashboardComponent');
exports.RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'hero',
        component: heroComponent_1.HeroComponent
    }, {
        path: 'detail/:id',
        component: heroDetailComponent_1.HeroDetailComponent
    }, {
        path: 'dashboard',
        component: dashboardComponent_1.DashboardComponent
    }
];
