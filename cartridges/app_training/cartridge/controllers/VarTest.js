"use strict";

var server = require("server");

server.get("HelloWorld", function(req, res, next) {
    var requestVar = "page string";
    res.render("vartest/vartest", { requestVar });
    return next();
});
module.exports = server.exports();
