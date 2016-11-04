/**
 * Created by PC-ZB on 2016/11/3.
 */
import { Component } from '@angular/core';
import { Hero } from '../../model/heroModel';
import { HeroService } from '../../service/heroService';
import { Router  } from '@angular/router';

@Component({
    selector:'dashboard',
    styleUrls:['app/css/dashboard.css'],
    templateUrl:'app/template/dashboardComponentTemp.html'
})
export class DashboardComponent{

    private topHeroes:Hero[];
    constructor(private heroService:HeroService,private router:Router ){}

    ngOnInit():void{
        this.heroService.getHeroes().then(heroes=>this.topHeroes=heroes.slice(0,3))
    }

    private gotoDetail(hero:Hero):void{
        let link = ['/detail',hero.id];
        this.router.navigate(link);
    }
}