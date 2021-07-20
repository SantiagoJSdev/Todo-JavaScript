
import './styles.css'

import { Todo, TodoList } from './classes';

import {crearTodoHtml} from './js/componentes';



export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml)
// localStorage.setItem('mi-key', 'hdchvchcv');
// localStorage.setItem('mi-kdey', 'hd255hcv');


// setTimeout (()=>{

//     localStorage.removeItem('mi-key')
// },1500)