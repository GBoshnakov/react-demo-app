import classes from "./Button.module.css";

function Button(props) {
    return <button className={classes.button} type="submit">{props.title}</button>
}

export default Button;