/**
 * Created by PC-ZB on 2016/11/3.
 */
import { HeroComponent } from '../component/hero/heroComponent';
import { Dashboard } from '../component/dashboard/dashboardComponent';
export const RouterConfig = [
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },{
        path:'hero',
        component:HeroComponent
    },{
        path:'dashboard',
        component:Dashboard
    }
]