import React from 'react'


import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from './Feature/TodoSlice'




const List = () => {
    const todos = useSelector(state => state.todos)
    console.log("🚀 ~ List ~ todos:", todos)
const dispatch =useDispatch()
  return (
    <div>
       {todos.map((todo) => {
        return(
                <div key={todo.id} style={{ border: "1px solid #ccc", width: "300px", margin: "0 auto", marginTop: "10px", borderRadius: "5px" }}>
                    <h3>TODO: {todo.text}</h3>
                    <button onClick={() => updateHandler(todo.id)}>Update</button>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </div>
            )}
            )}
    </div>
  )
}

export default List
