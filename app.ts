/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import { DisplayComponent } from 'display-component';

@Component({
  selector: 'main-app'
})
@View({
  template:`
    <h1>Main App</h1>
    <display></display>
  `,
  directives: [DisplayComponent]
})
class MainComponent {
    constructor() {
      
    }
}

bootstrap(MainComponent);