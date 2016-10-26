"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var appModule_1 = require('./module/appModule');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
//enableProdMode();
platform.bootstrapModule(appModule_1.AppModule);
