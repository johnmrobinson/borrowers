import Ember from 'ember';
// this controller handles the actions: save() and cancel() 


export default Ember.Controller.extend({
	// actions is a hash
	actions: {
		
		// save is a hook()
		save() {
			console.log('+- save action in friends new controller');
			return true;
		},

		// cancel is a hook()
		cancel() {
			console.log('+- cancel action in friends new controller');
			return true;
		}
	}

});
