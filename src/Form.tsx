import React, { useState } from "react"

type FormProps = {
    setTodo:(content:string)=>void
}

function Form({setTodo}:FormProps) {
    const [todoInput, setTodoInput] = useState<string>("");
    const postTodo = (content: string) => {
        setTodo(content);
    }

    const handleSubmit = (e:React.SubmitEvent) => {
        e.preventDefault();
    }

    return (
        <div id="todoform">
            <form onSubmit={(e=>handleSubmit(e))}>
                <input type="text"  id="todoInput" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
                <button type="submit" onClick={() => {
                    postTodo(todoInput);
                    setTodoInput("");
                }}>Post</button>
            </form>
        </div>
    )
}

export default Form;