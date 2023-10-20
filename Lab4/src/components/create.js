import React, { useState } from "react"

//Lab3 E2 (b)
const Create = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");

    const handleSubmit = (e) => {
        //prevents page from refreshing
        e.preventDefault();

        //display user input to browser console
        console.log("title " +title+ "Author :" +author+ "Cover: " +cover);
    }

    return (
        //lab4 E3 (a) + E3 (b)

        //creates form that accepts user input 
        <div>
            <form onSubmit ={handleSubmit}/>
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
            <input type="submit" value="Add Book"/>
           
        </div>

    );
}

export default Create;