import React,{ Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';


export default class Todo extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="container">
                <h1>Todo</h1>
                <TodoForm></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
        
    
}