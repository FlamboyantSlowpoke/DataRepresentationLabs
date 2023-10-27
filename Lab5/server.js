const express = require('express')
const app = express()
const port = 4000

//requires npm install body-parser
const bodyParser = require('body-parser');  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello World!');
})

app.get('/api/books', (req, res) => {
    console.log(req.params.name);
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];

    res.status(200).json({
        myBooks: data,
        message: "hello!",
        
    });
    

})

//returns file index.html
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//lists value of port in console
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// returns the values given from index.html
app.get('/name', (req, res) => {
    console.log( "hello " +req.query.fname + " " + req.query.lname);
})

//post is more secure for sending informationn
app.post('/name', (req, res) => {
    res.send('Got a POST request ' +req.body.fname + " " + req.body.lname);
})



