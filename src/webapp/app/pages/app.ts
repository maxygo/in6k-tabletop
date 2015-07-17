/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, coreDirectives} from 'angular2/angular2';

@Component({
    selector: 'app',
})
@View({
    template: `
      <nav>...</nav>
      <main>...</main>
   `
})
export class App {
    title: string;
    constructor() {
        this.title = 'KRAKEN';
    }
}