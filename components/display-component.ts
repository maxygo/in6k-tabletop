/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, NgFor, NgIf, Inject} from 'angular2/angular2';

import {FriendsService} from 'services/friends-service';

@Component({
	selector: "display",
	appInjector: [FriendsService]
})
@View({
	templateUrl: 'views/friendList.html',
	directives: [NgFor, NgIf]	
})
export class DisplayComponent {
	myName: string;
	names: Array<string>;
	
	constructor(@Inject(FriendsService) friendsService:FriendsService) {
		this.myName = 'MaxG';
		this.names = friendsService.names;
	}
}



