import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Delete = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");

    const [ loading, setLoading ] = useState(true);
    let { id } = useParams();
    const navigate = useNavigate();

    //fetch data from database to be deleted
    useEffect(() => {
        const endpoint = "http://localhost:4000/api/books/" + id;
        axios.get(endpoint).then((response) => {
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setCover(response.data.cover);
            setLoading(false); //set loading to false
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    //delete data from database
    const handleDelete = async () => {
        const endpoint = "http://localhost:4000/api/books/" + id;
        await axios.delete(endpoint).then((response) => { //axios delete request to send user input to server.js
            console.log(response.data); //logs response data
            navigate("/read"); //navigates to read page
        }).catch((error) => {
            console.log(error);
        });
    }


    //set loading status and check if book exists
    if (loading) return <h1>Loading...</h1>

    if (!book) return <h1>Book not found</h1>

    //gives a gui for deleting a book
    return (
        <div>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
            <br></br>
            <button onClick={() => navigate("/read")}>Cancel</button>
        </div>
    );
};

export default Delete;