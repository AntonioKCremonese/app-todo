import React,{ Component } from 'react';
import Axios from 'axios';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://10.20.200.52:3003/api/todos';

export default class Todo extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            description:'',
            list: []
        }

        this.adicionaNaLista = this.adicionaNaLista.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.atualizaLista = this.atualizaLista.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePut = this.handlePut.bind(this);
        this.atualizaLista();
    }

    adicionaNaLista(){
        
        const description = this.state.description;
        Axios.post(URL,{description}).then(resp=>this.atualizaLista());
    }

    atualizaLista(){
     Axios.get(`${URL}?sort=-createdAt`)
     .then(resp => this.setState({...this.state,description:'',list:resp.data}))   
    }

    handleChange(e){
        this.setState({...this.state,description:e.target.value})
    }

    handleDone(todo){
        Axios.put(`${URL}/${todo._id}`,{...todo,done:true}).then(resp=>this.atualizaLista())
    }
    handleDelete(todo){
        Axios.delete(`${URL}/${todo._id}`).then(resp => this.atualizaLista())
    }
    handlePut(todo){
        Axios.put(`${URL}/${todo._id}`,{...todo,done:false}).then(resp=>this.atualizaLista())   
    }

    render(){

        return(
            <div className="container">
                <h1>Todo</h1>
                <TodoForm description={this.state.description} adicionaNaLista={this.adicionaNaLista} handleChange={this.handleChange}></TodoForm>
                <TodoList handleDone={this.handleDone} handleDelete={this.handleDelete} handlePut={this.handlePut} list={this.state.list}></TodoList>
            </div>
        )
    }
        
    
}