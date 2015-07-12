/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var display_component_1 = require('display-component');
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        angular2_1.Component({
            selector: 'main-app'
        }),
        angular2_1.View({
            template: "\n    <h1>Main App</h1>\n    <display></display>\n  ",
            directives: [display_component_1.DisplayComponent]
        })
    ], MainComponent);
    return MainComponent;
})();
angular2_1.bootstrap(MainComponent);
