import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  styles: [`
      md-card {
          width: 400px;
          margin: 0 auto;
      }
  `],
  template: `
      <md-card>
          <md-card-header>
              <md-card-title>{{core}}</md-card-title>
              <md-card-subtitle>{{base}}</md-card-subtitle>
          </md-card-header>
          <img md-card-img width="100" src="app/core/assets/angular.png">
      </md-card>
  `
})
export class CoreComponent {
  base: String = 'Sitting on Base';
  core: String = 'Dummy-CoreModule';
}