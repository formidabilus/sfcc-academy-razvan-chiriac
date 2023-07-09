"use strict";

var server = require("server");

server.get("ShowProduct", function(req, res, next) {
    var ProductMgr = require("dw/catalog/ProductMgr");
    var product = ProductMgr.getProduct("008884303989M");
    res.render("vartest/vartest", { product: product });
    return next();
});

module.exports = server.exports();
