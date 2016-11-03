/**
 * Created by PC-ZB on 2016/10/28.
 */

import { Hero } from '../model/HeroModel';
export  class HeroService{

    getHeroes():Promise<Hero[]>{
       var heroes:Hero[] = [
            {id:1,name:'heroA'},
            {id:2,name:'heroB'},
            {id:3,name:'heroC'},
            {id:4,name:'heroD'},
            {id:5,name:'heroE'}
        ];
        return Promise.resolve(heroes);
    }
}