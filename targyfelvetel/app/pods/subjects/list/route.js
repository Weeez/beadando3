import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        //console.log("almafa "+ params)
        return this.store.findAll('subject');
    }
    
});