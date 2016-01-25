import DSS from 'ember-data';

export default DSS.Model.extend({
  firstName: DSS.attr('string'),
  lastName: DSS.attr('string'),
  email: DSS.attr('string'),
  twitter: DSS.attr('string'),
  totalArticles: DSS.attr('number')
});
