import React from "react"

//working link to card documentation: https://react-bootstrap.netlify.app/docs/components/cards
import Card from 'react-bootstrap/Card';


//Lab3 E2 (b) + E2 (c)
const Read = () => {
    {/*creates the given json file as a variable */}
    const bookData = [
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
            "authors": ["Kyle Banker", "Peter Bakkum", "Tim Hawkins", "Shaun Verch", "Douglas Garrett"],
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
    //lab3 E2 (d)
    function BookItems({ book }) {
        {/* limits authors displayed to 1 */}
        const firstAuthor = book.authors[0];
        return (
            <div style={{ marginBottom: '20px' }}>
                <Card>
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>   {/*wraps title of book within card*/}
                    </Card.Body>
                </Card>
                <p> </p>
                <img variant="top" src={book.thumbnailUrl} alt={book.title} />
                <p>{firstAuthor}</p> {/*returns first author value */}   
            </div>
        );
    };

    //lab3 E2 (c)
    function Books({ data }) {
        return (
            <div>
                {/* creates  */}
                {data.map(book => (
                    <BookItems key={book.isbn} book={book} />
                ))}
            </div>
        );
    };


    //return statement for read component
    return (
        <div>
            <h3>Read component</h3>
            <Books data={bookData} /> {/*returns book data */}  
        </div>
    );
}

export default Read;