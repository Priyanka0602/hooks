import React, { Component } from 'react';
class TodoList extends Component{
    render(){
        return (
            <form>
                <input placeholder = "Task"/>
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoList