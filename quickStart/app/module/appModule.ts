/**
 * Created by PC-ZB on 2016/10/26.
 */
import { NgModule } from  '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from  '../component/appComponent';
import { HeroDetailComponent } from '../component/herodetail/heroDetailComponent';
import { HeroComponent } from '../component/hero/heroComponent';
import { HeroService } from '../service/heroService';
import { RouterModule  } from '@angular/router';
import { RouterConfig } from '../config/routerConig';
import { DashboardComponent } from '../component/dashboard/dashboardComponent';

@NgModule({
    imports:    [BrowserModule,FormsModule,RouterModule.forRoot(RouterConfig)],
    declarations:   [AppComponent,HeroComponent,HeroDetailComponent,DashboardComponent],
    bootstrap:  [AppComponent],
    providers:  [HeroService]
})

export  class AppModule{  }