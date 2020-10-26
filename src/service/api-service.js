import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: '',
	headers: {
		"API-KEY": ""
	}
})

export const todosAPI = {
	getTodos () {
    return instance.get(`todos.json`)
    .then(response => response.data)
    .catch(err => console.log(err))
	}
}
