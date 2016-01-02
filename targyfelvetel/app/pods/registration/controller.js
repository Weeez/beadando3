import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        submit(){
			var user = this.store.createRecord('user',
                    {
                        neptun: this.get('neptun'),
                        password: this.get('password'),
                        role: 'student'
                    } );
			user.save();
			this.set('neptun','');
			this.set('password','');
			this.transitionToRoute('index');
			
        },
		clear(){
			this.set('neptun','');
			this.set('password','');
			this.transitionToRoute('index');
		}
    }
});
