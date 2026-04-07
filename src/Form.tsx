import { useState } from "react"

type FormProps = {
    setTodo:(content:string)=>void
}

function Form({setTodo}:FormProps) {
    const [todoInput, setTodoInput] = useState<string>("");
    const postTodo = (content: string) => {
        setTodo(content);
    }

    return (
        <>
        <input type="text"  id="todoInput" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
        <button onClick={() => postTodo(todoInput)}>Post</button>
        </>
    )
}

export default Form;