import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

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

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
