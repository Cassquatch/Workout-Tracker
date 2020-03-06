const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = {toJSON: {virtuals: true}}; 

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
 exercises: []
}, opts);

workoutSchema.virtual("totalDuration").get( function() {
    let exercises = this.exercises;
    let totalDuration = 0;
    exercises.forEach(exercise => {
        totalDuration += exercise.duration;
    
    });
    return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;