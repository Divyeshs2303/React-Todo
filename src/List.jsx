import React from 'react'


import {useSelector,useDispatch} from 'react-redux'
import { removeTodo,updateTodo } from './Feature/TodoSlice'
// import { updateTodo } from './Feature/updateTodo'




const List = (input) => {
    const todos = useSelector(state => state.todos)
    console.log("🚀 ~ List ~ todos:", todos)
const dispatch =useDispatch()

  return (
    <div>
       {todos.map((todo) => {
        return(
                <div key={todo.id} style={{ border: "1px solid #ccc", width: "300px", margin: "0 auto", marginTop: "10px", borderRadius: "5px" }}>
                    <h3>TODO: {todo.text}</h3>
                    <button onClick={() => dispatch(updateTodo(todo.text))}>Update</button>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </div>
            )}
            )}
    </div>
  )
}

export default List
