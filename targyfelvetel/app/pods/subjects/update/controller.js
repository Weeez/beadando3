import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
		submit(){
	    	if(document.getElementById('name').value == "" ||
        		document.getElementById('code').value == "" ||
        		document.getElementById('size').value == "" ||
        		document.getElementById('location').value == "" ||
        		document.getElementById('teacher').value == "" ){
        			alert("Az űrlap nincs teljesen kitöltve!");
        	}
        	else{
				var subject = this.get('model');
				subject.setProperties( { 
				    name: document.getElementById('name').value, 
				    code: document.getElementById('code').value,
				    size: document.getElementById('size').value,
				    location: document.getElementById('location').value,
				    teacher: document.getElementById('teacher').value
				})
				return subject.save().then(() => {
	                this.transitionToRoute('/subjects/list');
	            });
        	}
		},
		back(){
			this.transitionToRoute('/subjects/list');
		},
	}
});
