let express = require("express");
let api_router = express.Router();
const db = require("../models");

api_router.get("/api/workouts", (req,res) => {
    db.Workout.find({}).then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    });
});

api_router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, 
        { $push: {exercises: req.body}}).then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        });
   
});

api_router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    });
});



module.exports = api_router;