import type { Todo } from "./Content"

type cardProps = {
    todo: Todo,
    delteTodo:(id:number)=>void
}


function Card({todo,delteTodo}:cardProps){
    return (
        <>
            <li key={todo.id}>
                <p>{todo.content}
                    <button onClick={()=>delteTodo(todo.id)}>Delete</button>
                </p>
                
            </li>
        </>
    )
}

export default Card