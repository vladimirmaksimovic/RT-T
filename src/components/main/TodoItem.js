//import React libraries
import React from "react"

//import CSS
import "./../../style.css"

//render JSX into a DOM element
function TodoItem() {
  return (
    <div className='todo-item'>
      <input type='checkbox' />
      <p>placeholder text</p>
    </div>
  )
}

//export TodoItem component
export default TodoItem
