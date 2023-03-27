//Node Modules and Dependencies
require("dotenv").config();
const uniqid = require('uniqid');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require("mongoose-findorcreate");
const http = require("http");
const app = express();
var os = require("os");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const server = http.createServer(app); 

//ShortURL Logic
var ShortURL = new function () {
    var _alphabet = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_',
        _base = _alphabet.length;

    this.encode = function (num) {
        var str = '';
        while (num > 0) {
            str = _alphabet.charAt(num % _base) + str;
            num = Math.floor(num / _base);
        }
        return str;
    };

    this.decode = function (str) {
        var num = 0;
        for (var i = 0; i < str.length; i++) {
            num = num * _base + _alphabet.indexOf(str.charAt(i));
        }
        return num;
    };
};

//Stores the generated Hash Value
var hashValue = "";

//Stores whether the Hash is Custom Alias or not.
var isAlias = false;

//Stores whether the Hash is already taken or not.
var already = false;










//3000 for localhost (127.0.0.1) and dynamic port for Heroku and other Node.JS services
const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
    console.log("App successfully spinned up on port 3000");
});
