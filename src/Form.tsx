import React, { useState } from "react"

import type { TabItem } from "./Tab";

type FormProps = {
    setTodo:(content:string, tabId:string)=>void,
    tabId:string
}

function Form({setTodo, tabId}:FormProps) {
    const [todoInput, setTodoInput] = useState<string>("");
    const postTodo = (content: string, tabId:string) => {
        setTodo(content, tabId);
    }

    const handleSubmit = (e:React.SubmitEvent) => {
        e.preventDefault();
    }

    return (
        <div id="todoform">
            <form onSubmit={(e=>handleSubmit(e))}>
                <input type="text"  id="todoInput" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
                <button type="submit" onClick={() => {
                    postTodo(todoInput, tabId);
                    setTodoInput("");
                }}>Post</button>
            </form>
        </div>
    )
}

export default Form;