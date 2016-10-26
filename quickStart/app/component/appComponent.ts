/**
 * Created by PC-ZB on 2016/10/26.
 */
import { Component } from  '@angular/core';

 class Hero{
    id:number;
    name:string;
}

@Component({
    selector:   'appRoot',
    styleUrls:['app/css/heros.css'],
    template:
        `<h1>{{title}}</h1>
        <h2>My Heros：</h2>
        <ul class="heroes">
            <li (click)="onSelect(hero)" [class.selected]="hero === selectedHero" *ngFor="let hero of heros"><span class="badge">{{hero.id}}</span><span>{{hero.name}}</span></li>
        </ul>
        <div *ngIf="selectedHero">
            <h2>{{selectedHero.name}} Details:</h2>
            <div><label>id:</label>{{selectedHero.id}}</div>
            <div><label>name:</label><input [(ngModel)]="selectedHero.name"></div>
        </div>
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
    onSelect(hero:Hero){
        this.selectedHero = hero;
    }
}