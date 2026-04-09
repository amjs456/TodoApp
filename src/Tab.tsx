import Card from "./Card"
import type { Todo } from "./Content";
import deleteTodo from "./Content"
import List from "./List";


export type TabItem = {
    id:string,
    name:string
}

type TabProps = {
    tabItem:TabItem,
    todos:Todo[],
    deleteTodo:(id:number)=>void
}

function Tab({tabItem, todos, deleteTodo}:TabProps){
    let filteredTodos:Todo[];
    if(tabItem.id==="all"){
        filteredTodos = todos;
    } else {
        filteredTodos = todos.filter(todo=>todo.tabId===tabItem.id)
    }
    
    return (
        <>
            <List todos={filteredTodos} deleteTodo={deleteTodo}/>
        </>
    )
}

export default Tab