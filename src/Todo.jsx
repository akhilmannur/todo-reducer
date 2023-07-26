import React from 'react'
import {ACTIONS} from './App.jsx'

function Todo({todo, dispatch}) {
  return (
    <div className='todom'>
        <span style={{color:todo.complete? 'white':'red' }}>{todo.name}</span>
        <button className='com' onClick={()=>dispatch({type: ACTIONS.TOGGLE_TODO ,payload:{id:todo.id}})}>Confirm</button>
        <button className='com'  onClick={()=>dispatch({type: ACTIONS.DELETE_TODO ,payload:{id:todo.id}})}>Delete</button>
    </div>
  )
}

export default Todo