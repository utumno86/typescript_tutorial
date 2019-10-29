import axios from 'axios'

const url = 'http://jsonplaceholder.typicode.com/todos/5'

axios.get(url).then(response => {
	console.log(response.data)
})
