/**
 * Created by PC-ZB on 2016/11/3.
 */
import { Component } from '@angular/core';
import { Hero } from '../../model/heroModel';
import { HeroService } from '../../service/heroService';

@Component({
    selector:'dashboard',
    template:`
        <h3>我的仪表盘</h3>
        <div *ngFor="let hero of topHeroes">
            {{hero.name}}
        </div>
    `
})
export class Dashboard{

    private topHeroes:Hero[];
    constructor(private heroService:HeroService){}

    ngOnInit():void{
        this.heroService.getHeroes().then(heroes=>this.topHeroes=heroes.slice(0,3))
    }

}