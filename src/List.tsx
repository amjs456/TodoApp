import Card from "./Card"
import type { Todo } from "./Content"

type listProps = {
    todos: Todo[]
}

function List({todos}:listProps){
    return (
        <>
        {todos.map((todo,index)=>(
            <ul>
                <Card todo={todo}/>  
            </ul>
               
        ))}
        </>
    )
}

export default List