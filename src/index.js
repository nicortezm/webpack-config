// import { TodoList } from './classes/todo-list.class.js';
// import { Todo } from './classes/todo.class.js';

import { Todo,TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

import './styles.css';

const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');
todoList.nuevoTodo( tarea);


console.log(todoList);

crearTodoHtml(tarea);