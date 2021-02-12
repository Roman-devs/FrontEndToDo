import {useState} from "react";
import {deleteToDo} from "../App";


export default function ToDoEntry({id,description,status,onDelete}) {
    const [clicked, setClicked] = useState(0);
    return (
        <article>
            <p> {id} </p>
            <p> {description} </p>
            <p> {status} </p>
            <button onClick = {onDelete}> Delete </button>
        </article>
    )
}