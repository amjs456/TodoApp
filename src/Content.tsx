import { useEffect, useState } from "react"

import Form from "./Form"
import List from "./List";


export type Todo = {
    id:number,
    content:string
}

function Content() {
    const [todos, setTodos] = useState<Todo[]>(()=>{
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved): [];
    });

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const setTodo = (content:string) => {
        const todo:Todo = {
            "id": todos.length,
            "content":content
        };
        setTodos(prevTodos=>[...prevTodos, todo]);
    }

    return (
        <>
        <Form setTodo={setTodo} />
        <List todos={todos}/>
        </>
    )
}

export default Content