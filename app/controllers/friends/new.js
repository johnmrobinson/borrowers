import Ember from 'ember';
// this controller handles the actions: save() and cancel() 


export default Ember.Controller.extend({

	isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    {
      get() {
        return !Ember.isEmpty(this.get('model.email')) &&
          !Ember.isEmpty(this.get('model.firstName')) &&
          !Ember.isEmpty(this.get('model.lastName')) &&
          !Ember.isEmpty(this.get('model.twitter'));
      }
    }
	),

	actions: {
		
		save() {
			if (this.get('isValid')) {
				this.get('model').save().then((friend) => {
					this.transitionToRoute('friends.show',friend);
				});
			} else {
				this.set('errorMessage','Fill everything');
			}

			return false;
		},

		cancel() {
			this.transitionToRoute('friends');
			return false;
		}
	}

});
