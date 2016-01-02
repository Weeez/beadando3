import DS from 'ember-data';

var UserModel = DS.Model.extend({
  neptun: DS.attr('string'),
  password: DS.attr('string'),
  role: DS.attr('string'),
});

UserModel.reopenClass({
    FIXTURES: [
    ]
});

export default UserModel;
