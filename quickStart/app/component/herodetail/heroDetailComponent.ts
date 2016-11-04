/**
 * Created by PC-ZB on 2016/10/27.
 */
import { Component,Input } from '@angular/core';
import { Hero } from '../../model/heroModel';
import { HeroService } from '../../service/heroService';
import { ActivatedRoute , Params } from '@angular/router';
import { OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector:'hero-detail',
    styleUrls:['app/css/herodetail.css'],
    templateUrl:'app/template/heroDetailComponentTemp.html'
})
export class HeroDetailComponent implements OnInit {

    constructor(private heroService:HeroService,private route: ActivatedRoute,private location:Location){ }
    private abstract:any;
    private hero:Hero;

    ngOnInit():void{
        //console.log(this.route.params._value.id);
        this.route.params.forEach((param:Params)=>{
            let id = param['id'];
            this.heroService.getHeroById(id).then(hero=>{
               this.hero = hero;
            });
        })
    }

    private goBack():void{
        this.location.back();
    }
}