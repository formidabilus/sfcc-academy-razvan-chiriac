// "use strict";

// var server = require("server");
// var controller = require("app_storefront_base/cartridge/controllers/Cart");

// server.extend(controller);

// server.get("HelloWorld", function(req, res, next) {
//     var myvariable = "Just a string";
//     res.render("training/myfirsttemplate", { myvariable: myvariable });
//     return next();
// });

// module.exports = server.exports();

"use strict";

var server = require("server");

server.get("Basket", function(req, res, next) {
    var BasketMgr = require("dw/order/BasketMgr");

    var currentBasket = BasketMgr.getCurrentBasket();

    // Use ISML to display Basket object
    // The rendered ISML should be showBasket.isml (Use the quickcard section "Giving control to ISML" for help)
    res.render("training/showBasket", { currentBasket: currentBasket });
    return next();
});

module.exports = server.exports();
