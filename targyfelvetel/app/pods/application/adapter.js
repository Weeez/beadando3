import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://bead3-backend-weeez.c9users.io',
    //host: 'https://localhost:1111',
    namespace: ''
});
