const express = require('express');
const path = require('path');
const app = express();
const nedb = require ('nedb');
const bodyParser = require ('body-parser');
const db = new nedb({filename: 'students2.db', autoload: true});


const public = path.join(__dirname, 'public');
app.use(express.static(public));
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'landing.html'));
})
app.get('/profile', function(req, res) {
    res.sendFile(path.join(public, 'profile.html'));
})
app.get('/about', function(req, res) {
 res.sendFile(path.join(public, 'about.html'));
})
app.get('/submission', function(req, res) {
    res.sendFile(path.join(public, 'submission.html'));
   })
app.get('/profile', function(req, res) {
    res.sendFile(path.join(public, 'profile.html'));
   })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(bodyParser.urlencoded({ extended: true })); 

   app.post('/about', function(req, res){

    console.log(req.body)
    res.send("recieved your request!");
    db.insert(req.body, function(err, newDoc){
        if (err) {
            console.log('error', err);
        } else {
            console.log('document inserted: ', newDoc);
        }
    });
    

})   
app.use(function(req, res) {
 res.status(404);
 res.sendFile(path.join(public, 'error.html'));
})


app.listen(3000, () => {
 console.log('Server started on port 3000. Ctrl^c to quit.');
}) 