[Home](../README.md)
# Base
## Base of the base/core design

The Core ( = App) sits on a Base ( = Angular) which contains all external modules.<br>
The Base will be updated.<br>
The CoreModule will be replaced and refactored if necessary.

### Installation
	• ng new base4
	• cd base4
	• ng g m core                    // the CoreModule to be replaced
	• ng g c core/core               // a CoreComponent within the CoreModule 
	
### Assets should be sourced by core
* mv src/assets src/app/core/assets

***.angular-cli.json:***
    
    "assets": [
            "favicon.ico",
            "app/core/assets"
    ],
* refer to core assets like this:  ```<img src="app/core/assets/picture.png">```	
### Add external modules
	• yarn add lodash
	
	• yarn add @angular/material
	• yarn add @angular/cdk
	• yarn add @ngular/animations
	• yarn add hammerjs
	
	• yarn add @ngrx/store
	• yarn add @ngrx/effects
	• yarn add @ngrx/router-store 
	• yarn add @ngrx/store-devtools  
	• yarn add @ngrx/db
	• npm i -D jest
	
	• !! check if it still compiles, otherwise find out wht tool needs updating
	    • npm i -g @angular/cli
	    • npm i -g yarn
	    • node.js (mac: sudo n stable)
	    
### Material
	
	
[***app/app-material.ts***](./app-material.ts) contains AppMaterialModule

		○ because of lazy loading BrowserAnimationsModule has to be imported separately in app.module.ts 
		○ AppMaterialModule is imported only in core.module.ts
		
***app/core/core.module.ts***
    
    import { AppMaterialModule } from '../app-material';
    
        imports: [
            AppMaterialModule
        ]
    
### Routing
	• @angular/router comes with ng new base4
	• Choice: lazy routing
	
***app/app-routing.ts***

		import { Routes, RouterModule } from '@angular/router';
		
		const routes: Routes = [
		  {path: '', loadChildren: './core/core.module#CoreModule'}
		];
		export const AppRouting = RouterModule.forRoot(routes);
	
***app/app.module.ts***

		import { AppRouting } from './app-routing';
		...
		   imports: [
		      AppRouting,
		   ],
		...
		
***app/core/core-routing.ts***

		import { RouterModule, Routes } from '@angular/router';
		import { CoreComponent } from './core/core.component';
		
		const routes: Routes = [
		  {path: '', component: CoreComponent}
		];
		export const CoreRouting = RouterModule.forChild(routes);
	
***app/core/core.module.ts***

		import { CoreRouting } from './core-routing';
		...
		    imports: [
		        CoreRouting,
		    ],
		...
		
***app/app.component.ts***

		import { Component } from '@angular/core';
		
		@Component({
		  selector: 'app-root',
		  template: '<router-outlet></router-outlet>'
		})
		export class AppComponent {}
		

***src/styles.css***

		@import "~@angular/material/prebuilt-themes/indigo-pink.css";
		@import '~https://fonts.googleapis.com/icon?family=Material+Icons';
		
***src/main.ts*** (test, as described in Getting Started)

		import 'hammerjs';

### General

	• yarn add lodash

***main.ts***

    // Implementation of Observable.debug(message)
    import { Observable } from 'rxjs/Observable';
    const debuggerOn = true;
    Observable.prototype.debug = (message: string) => {
      if (debuggerOn) {
        return this.do(
          nextValue => console.log(message, nextValue),
          error => console.log(message, error),
          () => console.log('Observable completed - ', message)
        );
      } else {
        return this;
      }
    };
    declare module 'rxjs/Observable' {
      interface Observable<T> {
        debug: (...arg) => Observable<T>
      }
    }

### To save changes concerning base4 
    
***.gitignore***

    # to avoid (accidental) changes to core4_dummy
    /src/app/core

* git remote add base https://github.com/z-bit/base4.git
* git push -u base master

Or simply perfom the update on base4 directly

##
[Home](../README.md)