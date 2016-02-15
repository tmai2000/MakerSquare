interface Hero {
  id: number;
  name: string;
}

public hero: Hero = {
  id: 1,
  name: 'Windstorm'
};

import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	template: 
        	'<h1>{{title}}</h1>
		<h2>{{hero.name}} details!</h2>
		<div><label>id: </label>{{hero.id}}</div>
                <div><label>name: </label>{{hero.name}}</div>'
})

	/* template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>'*/
/*	template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>' */

export class AppComponent {
  public title = 'Tour of Heroes';
  public hero = 'Windstorm';
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
