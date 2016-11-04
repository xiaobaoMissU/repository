/**
 * Created by PC-ZB on 2016/10/28.
 */
import { Component,OnInit } from '@angular/core';
import { HeroService } from '../../service/heroService';
import { Hero } from '../../model/heroModel';

@Component({
    selector:'myHeroes',
    styleUrls:['app/css/heros.css'],
    template:
        `
        <h2>My Heros:</h2>
        <ul class="heroes">
            <li routerLink="/detail/{{hero.id}}" [class.selected]="hero === selectedHero" *ngFor="let hero of heroes"><span class="badge">{{hero.id}}</span><span>{{hero.name}}</span></li>
        </ul>

         `
})
export class HeroComponent implements OnInit{

    private selectedHero:Hero;
    private heroService:HeroService;
    private heroes:Hero[];
    private abstract:any;

    constructor(heroService:HeroService){
        this.heroService = heroService;
    }

    private onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }
    ngOnInit():void{
        this.heroService.getHeroes().then((sss)=>this.heroes=sss);
    }
}