const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = {toJSON: {virtuals: true}}; 

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
 exercises: []
}, opts);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;