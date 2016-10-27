/**
 * Created by PC-ZB on 2016/10/26.
 */
import { Component } from  '@angular/core';
import { Hero } from '../model/HeroModel';
import { HeroDetailComponent } from './herodetail/heroDetailComponent';


@Component({
    selector:   'appRoot',
    styleUrls:['app/css/heros.css'],
    template:
        `<h1>{{title}}</h1>
        <h2>My Heros：</h2>
        <ul class="heroes">
            <li (click)="onSelect(hero)" [class.selected]="hero === selectedHero" *ngFor="let hero of heros"><span class="badge">{{hero.id}}</span><span>{{hero.name}}</span></li>
        </ul>
        <hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>
         `
})
export class AppComponent{

    title:string = 'Tour Of Heroes';
    selectedHero:Hero;
    heros:Hero[] = [
        {id:1,name:'heroA'},
        {id:2,name:'heroB'},
        {id:3,name:'heroC'},
        {id:4,name:'heroD'},
        {id:5,name:'heroE'}
    ];
    onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }
}