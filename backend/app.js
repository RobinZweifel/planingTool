const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {mongoose} = require('./db/mongoose');

//Load mongoose modules
const { Event } = require('./db/model/event.model');
const events = require("events");

//load midleware
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})

/**
 * test
 */
app.get('/', (req, res) => {
    res.send("Hello World");
})

/**
 * GET /events
 * Goal -> get all events
 */
app.get('/events', (req, res) => {
    Event.find({}).then((events) => {
        res.send(events);
    });
})

/**
 * POST /event
 * Goal -> create a new event
 */
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

/**
 * PATTCH /event/:id
 * Goal -> update a event
 */
app.patch('/event/:id', (req, res) => {
    Event.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
})

/**
 * DELETE /event/:id
 * Goal -> delete a event
 */
app.delete('/event/:id', (req, res) => {
    Event.findByIdAndRemove({
        _id: req.params.id
    }).then((removedEvent) => {
        res.send(removedEvent);
    })
})
