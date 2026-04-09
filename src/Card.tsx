import type { Todo } from "./Content"

import "./Card.css"

type cardProps = {
    todo: Todo,
    delteTodo:(id:number)=>void
}


function Card({todo,delteTodo}:cardProps){
    return (
        <div className="todocard" key={todo.id}>
            <p>{todo.content}</p>
            <button className="updatebtn">Update</button>
            <button className="deletebtn" onClick={()=>delteTodo(todo.id)}>Delete</button>
        </div>
    )
}

export default Card