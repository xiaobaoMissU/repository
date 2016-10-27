/**
 * Created by PC-ZB on 2016/10/26.
 */
import { NgModule } from  '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from  '../component/appComponent';
import { HeroDetailComponent } from '../component/herodetail/heroDetailComponent';

@NgModule({
    imports:    [BrowserModule,FormsModule],
    declarations:   [AppComponent,HeroDetailComponent],
    bootstrap:  [AppComponent]
})

export  class AppModule{  }