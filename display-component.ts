/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, NgFor, NgIf, Inject} from 'angular2/angular2';

class FriendsService {
	names: Array<string>;
	
	constructor() {
		this.names = ['Igor', 'Dmitry', 'NikH', 'Sheva'];
	}
}

@Component({
	selector: "display",
	appInjector: [FriendsService]
})
@View({
	template: `
		<p>My Name: {{ myName }}</p>
		<p *ng-if="names.length > 3">You have many friends!</p>
		<p>List of names:</p>
		<ul>
			<li *ng-for="#name of names">
				{{ name }}
			</li>
		</ul>
	`,
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



