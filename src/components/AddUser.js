import React from "react";
import "./AddUser.css";

function AddUser(props) {

    function AddUSerHandler(event) {
        event.preventDefault();
        console.log('adding user');
    }

    return (
        <form className="input" onSubmit={AddUSerHandler} >
            <label htmlFor="username">Username:</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age:</label>
            <input  id="age" type="number"/>
            <button type="submit">Add username</button>
        </form>
    )
}

export default AddUser;