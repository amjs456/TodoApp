import Card from "./Card"
import type { Todo } from "./Content"

import "./List.css"

type listProps = {
    todos: Todo[],
    deleteTodo: (id:number)=>void
}

function List({todos, deleteTodo}:listProps){
    return (
        <div id="todolist">
        {todos.map((todo)=>(
            <Card todo={todo} delteTodo={deleteTodo}/>
        ))}
        </div>
    )
}

export default List