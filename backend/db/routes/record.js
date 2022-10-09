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
    dbConnect
        .collection("events")
        .insertOne(
            {
                title: req.body.title,
                organizer: req.body.organizer,
                date: req.body.date,
                info: req.body.info
            }
            , function (err, result, next) {
            if (err) {
                res.status(400).send("Error inserting matches!");
            } else {
                console.log(`Added a new match with id ${result.insertedId}`);
                res.status(204).send();
            }
        });
});

recordRoutes.route("/event/:id").delete((req, res, next) => {
    const dbConnect = dbo.getDb();
    const listingQuery = { listing_id: req.body.id };

    dbConnect
        .collection("events")
        .deleteOne(listingQuery, function (err, _result, next) {
            if (err) {
                res.status(400).send(`Error deleting listing with id ${listingQuery.listing_id}!`);
            } else {
                console.log("1 document deleted");
            }
        });
});

recordRoutes.route("/event/:id").patch(function (req, res) {
    const dbConnect = dbo.getDb();
    const listingQuery = { _id: req.body.id };

    dbConnect
        .collection("events")
        .updateOne(listingQuery,
            {
                $set: {
                    _id: req.body.id,
                    title: req.body.title,
                    organizer: req.body.organizer,
                    date: req.body.date,
                    info: req.body.info
                }
            },
            { upsert: true }
            , function (err, _result) {
            if (err) {
                res.status(400).send(`Error updating likes on listing with id ${listingQuery.id}!`);
            } else {
                console.log(`1 document updated ${listingQuery.id}`);
            }
        });
});
module.exports = recordRoutes;
