import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoAction } from '../../../store/slices/todo.slice';
import todoApi from '../../../apis/todo.api';

export default function Todo() {
  const dispatch = useDispatch()
  const todoStore = useSelector(store => store.todoStore)

 
  

  const handleAddTodo = async (e) => {
    e.preventDefault()
    try {
      let data = {
        todo: e.target.todo.value
      }
      let result = await todoApi.createTodo(data)
      dispatch(todoAction.addTodo(result.data.data))
    } catch (err) {
      console.log(err);
    }
  }
  const handleDeleteTodo = async (id) => {
    try {
      let result = await todoApi.deleteTodo(id)
      dispatch(todoAction.deleteTodo(result.data.data.id))
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className='listTodo'>
        {
          todoStore.data?.map(item => {
            return <div className='itemTodo' key={item.id}><h3>{item.todo}</h3><div>
              <i onClick={(e) => {
                
              }} className="fa-solid fa-square-check"></i>
              <i onClick={() => {
                handleDeleteTodo(item.id)
              }} className="fa-solid fa-trash-can"></i></div></div>
          })
        }
      </div>
      <div className='formInput'>
        <h3>Add to the todo list</h3>
        <form onSubmit={(e) => {
          handleAddTodo(e)
        }}>
          <input type="text" placeholder='Enter your todo' name='todo' />
          <button type='submit'>Add Item</button>
        </form>
      </div>
    </div>
  );
}