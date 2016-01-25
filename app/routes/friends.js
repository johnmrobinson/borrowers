import Ember from 'ember';


export default Ember.Route.extend({
	// actions is a hash
	actions: {
		
		// save is a hook()
		save() {
			console.log('+--- save action in friends route');
			return true;
		},

		// cancel is a hook()
		cancel() {
			console.log('+--- cancel action in friends route');
			return true;
		},

		// delete is a hook
		delete(friend) {
			friend.destroyRecord().then(() => {
				this.transitionTo('friends.index');
			});
		}
	}
});
