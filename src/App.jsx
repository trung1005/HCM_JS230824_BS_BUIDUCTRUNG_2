import React, { useEffect } from 'react';
import Home from './pages/home/Home';

import todoApi from './apis/todo.api';
import { useDispatch } from 'react-redux';
import { todoAction } from './store/slices/todo.slice';

export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const getTodos = async()=>{
      try{
        let todos = await todoApi.getTodos();
        console.log(todos.data);
        dispatch(todoAction.setData(todos.data.data))
      }catch(err){
        console.log(err);
      }
    }
    getTodos();
  },[])
  return (
    <div>
      <Home></Home>
    </div>
  );
}