
const mongoose = require('mongoose');

// create a model class
const blogModel = mongoose.Schema({
    blogheader: String,
    blogpost: String
},
{
    collection: "blogs"
});

module.exports = mongoose.model('Blog', blogModel);

