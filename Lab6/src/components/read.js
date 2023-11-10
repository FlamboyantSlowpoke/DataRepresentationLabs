import React, { useEffect } from "react"

//working link to card documentation: https://react-bootstrap.netlify.app/docs/components/cards
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from "react";


//Lab3 E2 (b) + E2 (c)
function Read() {

    const [bookData, setBookData] = useState([]);
    {/*creates the given json file as a variable */ }
    useEffect(
        () => {
            //axios call to json file
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
                //returns json file if axios call is successful
                .then((response) => {
                    setBookData(response.data.books);
                })
                //returns error if axios call fails
                .catch((error) => {
                    console.log(error);
                });
        }, [] //empty array to prevent infinite loop
    );

    //lab3 E2 (d)
    function BookItems({ book }) {
        {/* limits authors displayed to 1 */ }
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