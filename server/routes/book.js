const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Book = require('../models/book');

router.get('/', (req,res,next) => {
    Book.find((err, BookList) =>{
        if(err){
            return console.error(err);
        }
        else{
            res.render('book/list', {title: 'Book-List', BookList: BookList})
            console.log(BookList)
        }
    });
});
module.exports = router;

/* Get Route for displaying the Add page - Create Operation */

router.get('/add', (req,res,next) => {
    res.render('book/add', {title: 'Add Book'})
});
/* Post Route for processing the Add page - Create Operation */
router.post('/add', (req,res,next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    Book.create(newBook, (err, Book) => {
        if (err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/book-list');
        }
    });
});
/* Get Route for displaying the Edit page - Update Operation */
router.get('/edit/:id', (req,res,next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit})
        }
    });
});
/* Post Route for processing the Edit page - Update Operation */
router.post('/edit/:id', (req,res,next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    Book.updateOne({_id: id}, updatedBook, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/book-list');
        }
    })
});
/* Get to perform deletion - Delete Operation */
router.get('/delete/:name', (req,res,next) => {
    let name = req.params.name;

    Book.deleteMany({name: name}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/book-list');
        }
    });
});