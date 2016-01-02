import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
        submit(){
        	if(document.getElementById('name').value == "" ||
        	document.getElementById('code').value == "" ||
        	document.getElementById('size').value == "" ||
        	document.getElementById('location').value == "" ||
        	document.getElementById('teacher').value == "" ){
        		alert("Az űrlap nincs teljesen kitöltve!");
        	}
        	else{
				var subject = this.store.createRecord('subject',
	                    {
	                        name: this.get('name'),
	                        code: this.get('code'),
	                        size: this.get('size'),
	                        location: this.get('location'),
	                        teacher: this.get('teacher'),
	                    } );
				subject.save();
				this.set('name','');
				this.set('code','');
				this.set('size','');
				this.set('location','');
				this.set('teacher','');
				this.transitionToRoute('/subjects/list');
        	}
        },
		clear(){
			this.set('name','');
			this.set('code','');
			this.set('size','');
			this.set('location','');
			this.set('teacher','');
			this.transitionToRoute('/subjects/list');
		}
    }
    
});
