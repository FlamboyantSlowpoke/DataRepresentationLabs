import React from "react"


//Lab3 E2 (b) + E2 (c)
const Read = () => {
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

        const firstAuthor = book.authors[0];
        return (
            <div style={{ marginBottom: '20px' }}>
                <h3>{book.title}</h3>
                <p>{firstAuthor}</p>
                <img src={book.thumbnailUrl} alt={book.title} style={{ width: '150px' }} />
            </div>
        );
    };

    //lab3 E2 (c)
    function Books({ data }) {
        return (
            <div>
                {data.map(book => (
                    <BookItems key={book.isbn} book={book} />
                ))}
            </div>
        );
    };


    //return statement for read component
    return (
        <div>
            <h3>Hello from read component</h3>
            <Books data={bookData} />
        </div>
    );
}

export default Read;