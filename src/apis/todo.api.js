import axios from "axios";

export default {
    getTodos: async()=>{
        return await axios.get('http://127.0.0.1:3000/api/v1/todo');
    },
    createTodo: async(data)=>{
        return await axios.post('http://127.0.0.1:3000/api/v1/todo', data);
    },
    deleteTodo: async(id)=>{
        return await axios.delete(`http://127.0.0.1:3000/api/v1/todo/${id}`);
    }
}