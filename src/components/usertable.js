import React, { useState } from "react";
import { useTable } from "react-table";
import data from "./book-data.json";

function UserTable (){

const [books, setBooks] = useState(data);


    return (
        <div className = "user-table">
            <table> 
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Country</th>
                    <th>Language</th>
                    <th>Length</th>
                    <th>Year</th>
                    <th>ISBN Number</th>
                    <th>Condition</th>
                </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.country}</td>
                            <td>{book.language}</td>
                            <td>{book.length}</td>
                            <td>{book.year}</td>
                            <td>{book.isbn}</td>
                            <td>{book.condition}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;
