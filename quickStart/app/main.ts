/**
 * Created by PC-ZB on 2016/10/26.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './module/appModule';

const platform = platformBrowserDynamic();
//enableProdMode();
platform.bootstrapModule(AppModule);