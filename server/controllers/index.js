let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create User Model instance


module.exports.displayHomePage = (req, res, next) => { 
    res.render('index', {title: 'Home'});
}











