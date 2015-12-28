var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(path.join(__dirname + "/../public")));
app.use("/node_modules", express.static(path.join(__dirname + "/../node_modules")));
app.listen(port, function () {
    console.log("Server listening on http://localhost:" + port);
});
