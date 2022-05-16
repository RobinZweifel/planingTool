const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {mongoose} = require('./db/mongoose');

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Load mongoose modules
const { Event } = require('./db/model/event.model');
const events = require("events");

//load midleware
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/events', (req, res) => {
    Event.find({}).then((events) => {
        res.send(events);
    });
})

app.post('/event', (req, res) => {
    let title = req.body.title;
    let organizer = req.body.organizer;
    let date = req.body.date;
    let info = req.body.info;

    let newEvent = new Event({
        title, organizer, date, info
    });

    newEvent.save().then((eventDoc) => {
        res.send(eventDoc);
    });
})

app.patch('/event/:id', (req, res) => {
    Event.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
})

app.delete('/event/:id', (req, res) => {
    Event.findByIdAndRemove({
        _id: req.params.id
    }).then((removedEvent) => {
        res.send(removedEvent);
    })
})
