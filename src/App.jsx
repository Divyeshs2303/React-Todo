import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { addTodo } from './Feature/TodoSlice'
import List from "./List"

function App() {
  const [input, setInput] = useState('')
  console.log("🚀 ~ App ~ input:", input)

  const dispatch =useDispatch()

  const addTodoHandaler = ()=> {
    dispatch(addTodo(input))
    
  }

  return (
    <>
      <div className='container' style={{display:"grid",gap:"14px", alignItems:"center", justifyContent:"center",padding:"10px"}}>
     
      <h1> React ToDO using Redux </h1>
      <div className='Todotask'>
   
        <input className='TodoText' type="text"  value={input}   placeholder="Please enter the text " onChange={(e)=> setInput(e.target.value)} />
        <button className='TodoBtn' onClick={ addTodoHandaler}>add</button>
      </div>
      </div>
      <List props={input}/>
    </>
  )
}

export default App
