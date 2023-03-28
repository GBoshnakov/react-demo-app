import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";


function AddUser(props) {

    const [username, setUsername] = React.useState('');
    const [age, setAge] = React.useState('');

    function usernameHandler(event) {
        setUsername(event.target.value);
    }

    function ageHandler(event) {
        setAge(event.target.value);
    }

    function AddUSerHandler(event) {
        event.preventDefault();
        console.log(username, age);
        setUsername('');
        setAge('')
    }

    return (
        <Card className={classes.input} >
            <form onSubmit={AddUSerHandler} >
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" value={username} onChange={usernameHandler}/>
                <label htmlFor="age">Age:</label>
                <input id="age" type="number" value={age} onChange={ageHandler}/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;