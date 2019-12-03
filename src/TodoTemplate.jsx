import React from 'react'
import './App.css'

const TodoTemplate = props => {
    return(
        <li>{props.todo}<button className="btn-delete" onClick={props.handleDeleteTodo}>X</button></li>
    )
}

export default TodoTemplate;