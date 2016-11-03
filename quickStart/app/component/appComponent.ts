/**
 * Created by PC-ZB on 2016/10/26.
 */
import { Component } from  '@angular/core';
import { Hero } from '../model/heroModel';

@Component({
    selector:   'appRoot',
    template:
        `
        <h1>{{title}}</h1>
        <myHeroes></myHeroes>
         `
})
export class AppComponent{
    private title:string = 'Tour Of Heroes';
}