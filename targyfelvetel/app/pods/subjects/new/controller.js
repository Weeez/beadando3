import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
        submit(){
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
			this.transitionToRoute('index');
			
        },
		clear(){
			this.set('name','');
			this.set('code','');
			this.set('size','');
			this.set('location','');
			this.set('teacher','');
			this.transitionToRoute('index');
		}
    }
    
});
