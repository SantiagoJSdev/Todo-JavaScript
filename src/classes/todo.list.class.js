import { Todo } from "./todo.class";


export class TodoList {

    constructor() {

    this.todos =[];
    this.cargarLocalStore()
}
    nuevoTodo(Todo) {

    this.todos.push(Todo);
    this.guardarLocalStore();
 
}

    eliminarTodo(id) {

   this.todos = this.todos.filter(ele => ele.id != id)
   this.guardarLocalStore();
}

    marcarCompletados(id){

    for (const todo of this.todos){

    console.log(id, todo.id)
    if (todo.id == id) {

    todo.completado = !todo.completado;
    this.guardarLocalStore();
    break;
}
    }
    
}

    eliminarCompletados() {

    this.todos = this.todos.filter(ele => !ele.completado)
    this.guardarLocalStore();
    
}

    guardarLocalStore() {

    localStorage.setItem('todo', JSON.stringify(this.todos) );

    }

    cargarLocalStore(){
        this.todos =  (localStorage.getItem('todo'))
        ?  JSON.parse(localStorage.getItem('todo')) 
        : []
    this.todos = this.todos.map(obj => Todo.FromJson(obj))
}
}