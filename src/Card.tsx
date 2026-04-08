import type { Todo } from "./Content"

type cardProps = {
    todo: Todo
}


function Card({todo}:cardProps){
    console.log(todo.id);
    return (
        <>
            <li key={todo.id}>
                <p>{todo.content}</p>
            </li>
        </>
    )
}

export default Card