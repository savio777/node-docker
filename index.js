"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.get("/", function (_, res) {
    return res.json({ hello: ":)" });
});
app.listen(port, function () {
    console.log("app is running on localhost:".concat(port, "/"));
});
