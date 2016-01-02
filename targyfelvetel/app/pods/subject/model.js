import DS from 'ember-data';

const SubjectModel =  DS.Model.extend({
    name: DS.attr('String'),
    code: DS.attr('String'),
    size:  DS.attr('Number'),
    location:  DS.attr('String'),
    teacher:  DS.attr('String'),
});

SubjectModel.reopenClass({
    FIXTURES: [
    ]
});

export default SubjectModel;
