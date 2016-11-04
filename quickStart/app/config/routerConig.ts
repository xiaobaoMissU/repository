/**
 * Created by PC-ZB on 2016/11/3.
 */
import { HeroComponent } from '../component/hero/heroComponent';
import { HeroDetailComponent } from '../component/herodetail/heroDetailComponent';
import { DashboardComponent } from '../component/dashboard/dashboardComponent';
export const RouterConfig = [
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },{
        path:'hero',
        component:HeroComponent
    },{
        path:'detail/:id',
        component:HeroDetailComponent
    },{
        path:'dashboard',
        component:DashboardComponent
    }
]