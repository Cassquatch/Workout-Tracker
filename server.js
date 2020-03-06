  
const express = require("express");
const logger = require("morgan"); 
const mongoose = require("mongoose"); 

const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger("dev")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



let api_routes = require("./routes/api-routes");
let html_routes = require("./routes/html-routes");
app.use(api_routes);
app.use(html_routes);

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.listen(PORT, function() {
console.log(`App running on localhost:${PORT}`);
});