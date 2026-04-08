import Card from "./Card"
import type { Todo } from "./Content"

type listProps = {
    todos: Todo[],
    deleteTodo: (id:number)=>void
}

function List({todos, deleteTodo}:listProps){
    return (
        <>
        {todos.map((todo,index)=>(
            <ul>
                <Card todo={todo} delteTodo={deleteTodo}/>  
            </ul>
               
        ))}
        </>
    )
}

export default List