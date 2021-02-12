import logo from './logo.svg';
import './App.css';
import {deleteTodo, getTodoAPI, postTodo} from "./services/requestsAxios";
import {useState} from "react";
import {useEffect} from "react";
import ToDoEntry from "./components/ToDoEntry";

function App() {
    const [toDos, setToDos] = useState([{"id": "default", "status": "default", "description": "default"}]);
    const [newToDoText, setNewToDoText] = useState("");

    useEffect(() => {
        getTodoAPI().then(response => setToDos(response));
    }, [])

    useEffect(() => {
        console.log("ToDo(s) have been changed!")
    }, [toDos])

    return (
        <div className="App">
            <h1>Hi! Today you need to focus on:</h1>
            <h2> ToDos </h2>

            <form onSubmit={event=> {
                event.preventDefault();
                console.log(event);
                post(setToDos,toDos, newToDoText);
             }}>
                <input type="text" onChange={event => setNewToDoText(event.target.value)} /><br/><br/>
                <button> Create ToDo! </button>
            </form>

            {toDos.map(toDosToDelete => <ToDoEntry id={toDosToDelete.id}
                                           description={toDosToDelete.description}
                                           status={toDosToDelete.status}
                                           onDelete={()=> {
                                               const updatedList = toDos.filter(deleteID => deleteID.id!==toDosToDelete.id);
                                               setToDos(updatedList);
                                               deleteTodo(toDosToDelete.id);
                                           }
                                           }/>)
            }


            <label className="h2" form="person">Namenseingabe</label>
        </div>
);
}

function post (setToDo, toDos, newToDoText)
    {
        const response = postTodo({"description":newToDoText, "status": "OPEN"});
        response.then(toDo => setToDo([...toDos, toDo]));
    }

export default App;
