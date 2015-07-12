/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var FriendsService = (function () {
    function FriendsService() {
        this.names = ['Igor', 'Dmitry', 'NikH', 'Sheva'];
    }
    return FriendsService;
})();
var DisplayComponent = (function () {
    function DisplayComponent(friendsService) {
        this.myName = 'MaxG';
        this.names = friendsService.names;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: "display",
            appInjector: [FriendsService]
        }),
        angular2_1.View({
            template: "\n\t\t<p>My Name: {{ myName }}</p>\n\t\t<p *ng-if=\"names.length > 3\">You have many friends!</p>\n\t\t<p>List of names:</p>\n\t\t<ul>\n\t\t\t<li *ng-for=\"#name of names\">\n\t\t\t\t{{ name }}\n\t\t\t</li>\n\t\t</ul>\n\t",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }),
        __param(0, angular2_1.Inject(FriendsService))
    ], DisplayComponent);
    return DisplayComponent;
})();
exports.DisplayComponent = DisplayComponent;
