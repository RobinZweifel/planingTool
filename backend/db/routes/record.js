const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../conn");

// This section will help you get a list of all the records.
recordRoutes.route("/events").get(async function (req, res) {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection("events")
        .find({}).limit(50)
        .toArray(function (err, result, next) {
            if (err) {
                res.status(400).send("Error fetching listings!");
            } else {
                res.json(result);
            }
        });
});

recordRoutes.route("/event").post(function (req, res, next) {
    const dbConnect = dbo.getDb();


    const newEvent = {
        title:  req.body.title,
        organizer: req.body.organizer,
        date: req.body.date,
        info: req.body.info
    };

    dbConnect
        .collection("matches")
        .insertOne(newEvent, function (err, result, next) {
            if (err) {
                res.status(400).send("Error inserting matches!");
            } else {
                console.log(`Added a new match with id ${result.insertedId}`);
                res.status(204).send();
                console.log(res.info);
            }
        });

});

module.exports = recordRoutes;
