"use strict";

var server = require("server");
var controller = require("app_storefront_base/cartridge/controllers/Cart");

server.extend(controller);

server.get("HelloWorld", function(req, res, next) {
    var myvariable = "Just a string";
    res.render("training/myfirsttemplate", { myvariable: myvariable });
    return next();
});

module.exports = server.exports();
