import Card from "./Card"
import type { Todo } from "./Content"

type listProps = {
    todos: Todo[],
    deleteTodo: (id:number)=>void
}

function List({todos, deleteTodo}:listProps){
    return (
        <div id="todolist">
        {todos.map((todo)=>(
            <ul>
                <Card todo={todo} delteTodo={deleteTodo}/>  
            </ul>
               
        ))}
        </div>
    )
}

export default List