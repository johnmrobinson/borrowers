import Ember from 'ember';
import DSS from 'ember-data';

export default DSS.Model.extend({
  firstName: DSS.attr('string'),
  lastName: DSS.attr('string'),
  email: DSS.attr('string'),
  twitter: DSS.attr('string'),
  totalArticles: DSS.attr('number'),
  fullName: Ember.computed('firstName','lastName',{
  	get() {
  		return this.get('firstName') + ' ' + this.get('lastName');
  	}
  })

});
