import React from 'react'; 
import './Todo.css';

export default props => (
<div style={{
        // textDecoration: "line-through"
        textDecoration: props.todo.completed ? "line-through" : ""
    }}

    className= "boxStyle"
 
    onClick={props.toggleComplete}
    
    >
    
    {props.todo.text}

</div>
);