//read.js
import React, { useEffect } from "react"

//working link to card documentation: https://react-bootstrap.netlify.app/docs/components/cards
import Card from 'react-bootstrap/esm/Card';
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";


//Lab3 E2 (b) + E2 (c)
function Read() {

    const [bookData, setBookData] = useState([]);
    {/*creates the given json file as a variable */ }
    useEffect(
        () => {
            //axios call to json file from express server 
            axios.get('http://localhost:4000/api/books')
                //returns json file if axios call is successful
                .then((response) => {
                    setBookData(response.data);
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
        const author = book.author;
        return (
            <div style={{ marginBottom: '20px' }}>
                <Card>
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>   {/*wraps title of book within card*/}
                    </Card.Body>
                </Card>
                <p> </p>
                <img style={{ maxWidth: '200px', maxHeight: '200px' }} variant="top" src={book.cover} alt={book.title} /> 
                <p>{author}</p>
                <Link to={"/edit/" + book._id} className="btn btn-primary">Edit</Link> {/*creates edit button for each book */}
            </div>
        );
    };

    //lab3 E2 (c)
    function Books({ data }) {
        return (
            <div>
                {/* creates  */}
                {data.map(book => (
                    <BookItems key={book._id} book={book} />
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
