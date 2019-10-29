import axios from 'axios'

const url = 'http://jsonplaceholder.typicode.com/todos/5'

interface Todo {
	id: number
	title: string
	completed: boolean
}

axios.get(url).then(response => {
	const todo: Todo = response.data

	const id = todo.id
	const title = todo.title
	const completed = todo.completed

	logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
    The Todo with the ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `)
}
