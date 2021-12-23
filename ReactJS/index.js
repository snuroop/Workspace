const express = require("express");

const app = express();
app.get("/", (req, res, next) => {
    res.send("Home page!!");
})
app.listen(3000, () => {
    console.log("App started!! listening port 3000");
})