import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";


function AddUser(props) {

    function AddUSerHandler(event) {
        event.preventDefault();
        console.log('adding user');
    }

    return (
        <Card className={classes.input} >
            <form onSubmit={AddUSerHandler} >
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age:</label>
                <input id="age" type="number" />
                <Button title="Add user"/>
            </form>
        </Card>
    )
}

export default AddUser;