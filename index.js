const nedb = require ('nedb');

const db = new nedb({filename: 'students.db', autoload: true});

console.log('db created');

db.insert({
    student: 'Peter',
    age: 20,
    programme: 'Computing',
    grant: false,
    modules:[{
        name: 'Programming',
        grade: 65
    },
    {
        name: 'Databases',
        grade: 80
    },
    {
        name: 'Networking',
        grade: 80
    }]
}, function(err, newDoc){
    if (err) {
        console.log('error', err);
    } else {
        console.log('document inserted: ', newDoc);
    }
})

db.insert({
    student: 'Ann',
    age: 21,
    programme: 'Networking',
    grant: true,
    modules:[{
        name: 'routing',
        grade: 70
    },
    {
        name: 'security',
        grade: 61
    },
    {
        name: 'server management',
        grade: 62
    }]
}, function(err, newDoc){
    if (err) {
        console.log('error', err);
    } else {
        console.log('document inserted: ', newDoc);
    }
})

db.find({}, function(err, docs){
    if (err) {
        console.log('error');
    } else {
        console.log('documents retrieved:', docs);
    }
})

db.remove({ student: 'Peter'}, {}, function(err, docsRem){
    if (err) {
        console.log('error');
    } else {
        console.log(docsRem, 'document(s) removed from the database');
    }
})
