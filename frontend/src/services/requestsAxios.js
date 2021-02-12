import axios from "axios";

const baseURL = "/api/todo"

export function getTodoAPI (){
    return axios.get(baseURL).then(response => response.data);
}

// check if ID exists -> service - to be implemented
export function putTodo(id, toDo){
    return axios.put(baseURL+"/"+id, toDo);
}
 // new
export function postTodo(toDowoID){
    return axios.post(baseURL, toDowoID).then(response => response.data);
}
// Call the delete Mapping in backend
export function deleteTodo(id){
    return axios.delete(baseURL+"/"+id);
}

