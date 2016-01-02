import DS from 'ember-data';

const SubjectModel =  DS.Model.extend({
    subject_name: DS.attr('string'),
    subject_code: DS.attr('string'),
    subject_size:  DS.attr('number'),
    subject_location:  DS.attr('string'),
    subject_teacher:  DS.attr('string'),
});

SubjectModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            subject_name: 'Analizis',
            subject_code: 'anal',
            subject_size: 12,
            subject_location: 'Bolyai',
            subject_teacher: 'Toth Tamas'
        } ,
        {
            id: 2,
            subject_name: 'Analizis2',
            subject_code: 'anal',
            subject_size: 12,
            subject_location: 'Bolyai',
            subject_teacher: 'Toth Tamas'
        }       
    ]
});

export default SubjectModel;
