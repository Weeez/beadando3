import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
		submit(){
			var subject = this.get('model');
			subject.setProperties( { 
			    name: document.getElementById('name').value, 
			    code: document.getElementById('code').value,
			    size: document.getElementById('size').value,
			    location: document.getElementById('location').value,
			    teacher: document.getElementById('teacher').value
			})
			return subject.save().then(() => {
                this.transitionToRoute('index');
            });
		},
		clear(){
			this.transitionToRoute('index');
		},
	}
});
