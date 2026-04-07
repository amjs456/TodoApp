import { useState } from "react"

import Form from "./Form"


type Todo = {
    id:number,
    content:string
}

function Content() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const setTodo = (content:string) => {
        const todo:Todo = {
            "id": todos.length,
            "content":content
        };
        setTodos([...todos, todo]);
    }

    return (
        <>
        <Form setTodo={setTodo} />
        </>
    )
}

export default Content