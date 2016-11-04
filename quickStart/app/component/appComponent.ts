/**
 * Created by PC-ZB on 2016/10/26.
 */
import { Component } from  '@angular/core';
import { Hero } from '../model/heroModel';

@Component({
    selector:   'appRoot',
    styleUrls:['app/css/appcomponent.css'],
    template:
        `
        <h1>{{title}}</h1>
        <nav><a routerLink="/hero">英雄列表</a>&nbsp;&nbsp;<a routerLink="/dashboard">仪表盘</a></nav>
        <router-outlet></router-outlet>
         `
})
export class AppComponent{
    private title:string = 'Tour Of Heroes';
}