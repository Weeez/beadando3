import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		editItem(subject){
			this.transitionToRoute('/subjects/update/'+subject.id);
		},
		deleteItem(id){
			this.store.find('subject', id).then(function (subject) {
			subject.deleteRecord();
			subject.save();
        });
		},
		 newItem() {
            this.transitionToRoute('new');
        },
	}
});
