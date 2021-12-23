const express = require("express");

const app = express();
app.get("/", (req, res, next) => {
    res.send("Home page!!");
});
app.use((req, res, next) => {
    res.send("looks like you are lost");
})
app.use((err, req, res, next) => {
    res.status(err.status).send(err.message);
})
app.listen(3000, () => {
    console.log("App started!! listening port 3000");
})