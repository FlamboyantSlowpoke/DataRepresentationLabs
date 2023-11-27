//create js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//Lab3 E2 (b)
const Create = () => {

    //useState hook to create variables for user input
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");

    const naviate = useNavigate(); //useNavigate() is used to navigate to a different page

    const handleSubmit = (e) => {
        //prevents page from refreshing
        e.preventDefault();

        //display user input to browser console
        console.log("title " + title + "\nAuthor :" + author + "\nCover: " + cover);

        //create object to store user input
        const newBook = {
            title: title,
            author: author,
            cover: cover
        }
        //axios post request to send user input to server.js
        axios.post('http://localhost:4000/api/books', newBook)
            .then((res) => {
                console.log(res.data);
                navigate("/read"); //navigates to read page
            })//.then() is used to handle a successful response from the server
            .catch();//.catch() is used to handle an error response from the server
    }

    return (
        //lab4 E3 (a) + E3 (b)

        //creates form that accepts user input 
        <div>
            {/* form header */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label> Edit Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label> Edit Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                {/* button for user to commit changes */}

                <input type="submit" value="Add Book" />
            </form>
        </div>

    );
}

export default Create;


