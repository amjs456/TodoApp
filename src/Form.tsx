import React, { useState } from "react"

import type { TabItem } from "./Tab";

type FormProps = {
    setTodo:(content:string, tabId:string)=>void
}

function Form({setTodo}:FormProps) {
    const [todoInput, setTodoInput] = useState<string>("");
    const postTodo = (content: string, tabId:string) => {
        setTodo(content, tabId);
    }
    const tab:TabItem={
        "id":"sample",
        "name":"sample"
    }

    const handleSubmit = (e:React.SubmitEvent) => {
        e.preventDefault();
    }

    return (
        <div id="todoform">
            <form onSubmit={(e=>handleSubmit(e))}>
                <input type="text"  id="todoInput" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
                <button type="submit" onClick={() => {
                    postTodo(todoInput, tab.id);
                    setTodoInput("");
                }}>Post</button>
            </form>
        </div>
    )
}

export default Form;