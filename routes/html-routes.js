let express = require("express");
let html_router = express.Router();

const path = require("path");


html_router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

html_router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

html_router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = html_router;
