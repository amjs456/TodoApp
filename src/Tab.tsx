import type { Todo } from "./Content";
import type { TabItem } from "./Content";
import Form from "./Form";
import List from "./List";

import "./Tabs.css"


type TabProps = {
    tabItem:TabItem,
    todos:Todo[],
    setTodo:(conent:string, tabId:string)=>void,
    deleteTodo:(id:number)=>void
}

function Tab({tabItem, todos, setTodo, deleteTodo}:TabProps){
    let filteredTodos:Todo[];
    if(tabItem.id==="all"){
        filteredTodos = todos;
    } else {
        filteredTodos = todos.filter(todo=>todo.tabId===tabItem.id)
    }
    
    return (
        <div className="tab">  
            <Form setTodo={setTodo} tabId={tabItem.id}/>
            <List todos={filteredTodos} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default Tab