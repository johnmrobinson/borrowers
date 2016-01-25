// routes/friends/index.js

// This route defines a model function (hook) that returns an array of friends from ember-data

import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('friend');
		// return this.store.queryRecord('friend',{firstName: 'Sam'});
	}

});
