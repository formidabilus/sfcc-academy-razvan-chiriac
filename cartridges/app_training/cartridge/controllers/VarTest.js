"use strict";

var server = require("server");
var controller = require("app_storefront_base/cartridge/controllers/Cart");

server.extend(controller);

server.get("HelloWorld", function(req, res, next) {
    var requestVar = "page string";
    res.render("vartest/vartest", { requestVar });
    return next();
});
module.exports = server.exports();
