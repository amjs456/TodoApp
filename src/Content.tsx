import { useEffect, useState } from "react"

import Tabs from "./Tabs";
import Tab from "./Tab";


export type Todo = {
    id:number,
    content:string,
    tabId:string
}

export type TabItem = {
    id:string,
    name:string
}

function Content() {
    const [todos, setTodos] = useState<Todo[]>(()=>{
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved): [];
    });

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    const tabAll = {
        "id":"all", 
        "name": "ALL"
    }

    const [tabs] = useState<TabItem[]>(()=>{
            const saved = localStorage.getItem("tabs");
            return saved ? JSON.parse(saved): [tabAll];
        })

    useEffect(()=>{
        localStorage.setItem("tabs", JSON.stringify(tabs));
    }, [tabs]);


    const setTodo = (content:string, tabId:string) => {
        const todo:Todo = {
            "id": todos.length,
            "content":content,
            "tabId":tabId
        };
        setTodos(prevTodos=>[...prevTodos, todo]);
    }

    const deleteTodo = (id:number) => {
        setTodos(todos.filter(todo=>todo.id !== id))
    }

    const [selectedTab, setSelectedTab] = useState<TabItem>(tabAll);
    const selectTab=(id:string)=>{
        let selected = tabs.find(tab=>tab.id===id)
        if (selected===undefined){
            selected = tabAll;
        }
        setSelectedTab(selected);
    }

    return (
        <div id="content">
            <Tabs tabs={tabs} selectTab={selectTab} />
            <Tab tabItem={selectedTab} todos={todos} setTodo={setTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default Content