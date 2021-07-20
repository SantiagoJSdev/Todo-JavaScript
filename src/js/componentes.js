import { Todo, TodoList } from "../classes";
import { todoList } from "../index";


const divTodoList = document.querySelector('.todo-list');
const txtImput    = document.querySelector('.new-todo');
const btnBorrar   = document.querySelector('.clear-completed');
const ulFiltros   = document.querySelector('.filters');
const anchor      = document.querySelectorAll('.filtro')

export const crearTodoHtml = (Todo) => {

const htmlTodo = 
					`<li class="${(Todo.completado)?"completed":''}" data-id="${Todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(Todo.completado)?"checked":''} >
							<label>${Todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;

					const div = document.createElement('div');
					div.innerHTML = htmlTodo;

					divTodoList.append(div.firstElementChild);
					return div;


}

//eventos 
		txtImput.addEventListener('keyup',(event)=> {

		if (event.keyCode === 13 && txtImput.value.length > 0) {
			console.log(txtImput.value,'este es ' )
			const nuevoTodo = new Todo(txtImput.value)
			crearTodoHtml(nuevoTodo)
			txtImput.value ="";
			todoList.nuevoTodo(nuevoTodo)
		}
		})

		divTodoList.addEventListener('click',(eventos) => {
		const nombreElemento = eventos.target.localName; //input, label, button
		const todoElemento = eventos.target.parentElement.parentElement;
		const todoId = todoElemento.getAttribute('data-id'); 

	if (nombreElemento.includes('input')) {
		todoList.marcarCompletados(todoId);
		todoElemento.classList.toggle('completed')
		} else if (nombreElemento.includes('button')) {
		todoList.eliminarTodo(todoId);
		divTodoList.removeChild(todoElemento)

	}
	})

	btnBorrar.addEventListener('click',() => {
	todoList.eliminarCompletados();


		for (let i = divTodoList.children.length - 1; i >= 0; i--){

		const elemento = divTodoList.children[i];

		if (elemento.classList.contains('completed')){
			divTodoList.removeChild(elemento);
			}
	}

	})

	ulFiltros.addEventListener('click', (event) => {
		
		const filtro = event.target.text;
		if (!filtro) {return;}

		anchor.forEach(ele => ele.classList.remove('selected'));
		event.target.classList.add('selected');
		for (const elemento of divTodoList.children) {
			elemento.classList.remove('hidden');
			const completado = elemento.classList.contains('completed');

			switch (filtro) {
				case 'Pendientes':
					if (completado) {
						elemento.classList.add('hidden');
					}
					break;
					case 'Completados':
					if (!completado) {
						elemento.classList.add('hidden');
					}
					break;


			}
		}


	})