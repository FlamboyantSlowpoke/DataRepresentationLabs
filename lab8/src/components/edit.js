import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
    let { id } = useParams();

    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [author, setAuthor] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/api/books/" + id).then((response) => {
            setTitle(response.data.title);
            setCover(response.data.cover);
            setAuthor(response.data.author);
        })
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            id: id,
            title: title,
            cover: cover,
            author: author
        };
        axios.put("http://localhost:4000/api/books/" + id, newBook).then((res) => {
            console.log(res.data);
            navigate("/read");
        });
    }
    return (
        <div>
            <h1>Edit</h1>
            <form onSubmit={handleSubmit}>
                <div className="edit-form">
                    <label>
                        Add book title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="edit-form">
                    <label>
                        Add book cover:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    />
                </div>
                <div className="edit-form">
                    <label>
                        Add book author:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="edit-form">
                    <input type="submit" value="Edit Book" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
