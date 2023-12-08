//server.js

const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

//requires npm install body-parser
//allows the use of req.body
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//paths to server
const path = require('path'); //path to server
app.use(express.static(path.join(__dirname, '../build'))); //path to build folder
app.use('/static', express.static(path.join(__dirname, 'build//static'))); //path to static folder

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

main().catch(err => console.log(err));

//connects to the database
//main connection string: mongodb+srv://benjaminstacey15:<password>@cluster0.lqmsp7v.mongodb.net/?retryWrites=true&w=majority
async function main() {
    await mongoose.connect('mongodb+srv://benjaminstacey15:65Sgy3NhUVdllxMy@cluster0.lqmsp7v.mongodb.net/?retryWrites=true&w=majority');
}

//creates a schema for the database
const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
});

const bookModel = mongoose.model('book', bookSchema);//creates a model for the database

//updates a book in the database from edit.js
app.put('/api/books/:id', async (req, res) => {
    let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.send(book);

});

//deletes a book from the database
app.delete('/api/books/:id', async (req, res) => {
    try {
        const deletedReview = await bookModel.findByIdAndDelete(req.params.id); //finds a book by id and deletes it
        if (!deletedReview) res.status(404).send("No item found") //if no book is found returns 404
        res.status(200).send()
    } catch (err) {
        console.log(err); //logs error  
        res.status(500).send(err); //returns error
    }
});



//returns the name given in the url
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello World!');
})
//returns json data
app.get('/api/books', async (req, res) => {

    let books = await bookModel.find({});
    res.json(books);
})

//returns json data for a specific book
app.get('/api/books/:id', async (req, res) => {
    console.log(req.params.id);

    let book = await bookModel.findById({ _id: req.params.id }); //finds a book by id

    res.send(book); //returns the book
})

//returns file index.html 
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


// returns the values given from index.html in the console
app.get('/name', (req, res) => {
    console.log("hello " + req.query.fName + " " + req.query.lName);
})

//post is more secure for sending information to the server
app.post('/name', (req, res) => {
    res.send('Got a POST request ' + req.body.fName + " " + req.body.lName);
})

//post request to store data on MongoDB
app.post('/api/books', (req, res) => {
    console.log(req.body);
    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    }).then(() => { res.send("Data recieved and stored on MongoDB") }).catch((err) => { res.send(err) })
});
//function to handle post request from create.js
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//listens for post request from create.js
app.post('/api/books', (req, res) => {

    console.log(req.body);
    res.send("Data recieved and stored");
});

//returns index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

//lists value of port in console 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

