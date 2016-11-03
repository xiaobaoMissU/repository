/**
 * Created by PC-ZB on 2016/10/27.
 */
import { Component,Input } from '@angular/core';
import { Hero } from '../../model/heroModel';

@Component({
    selector:'hero-detail',
    template:
        `<h2>{{hero.name}} Details:</h2>
         <div><label>id:</label>{{hero.id}}</div>
         <div><label>name:</label><input [(ngModel)]="hero.name"></div>
        `
})
export class HeroDetailComponent{

    @Input()
    hero:Hero;
}