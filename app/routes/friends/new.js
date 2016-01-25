import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('friend');
	},
		// actions is a hash
	actions: {
		
		// save is a hook()
		save() {
			console.log('+-- save action in friends new route');
			return true;
		},

		// cancel is a hook()
		cancel() {
			console.log('+-- cancel action in friends new route');
			return true;
		}
	}

});
