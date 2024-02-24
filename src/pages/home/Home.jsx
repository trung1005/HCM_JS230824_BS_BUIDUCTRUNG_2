import React from 'react';
import Todo from './components/Todo';
import '../../scss/index.scss'

export default function Home() {
    return (
        <div className='container'>
            <div className='headerContainer'>
                <h1>Todo List</h1>
                <p>Get things done, one item at a time.</p>
            </div>
            <div className='bodyContainer'>
                <Todo></Todo>
            </div>
        </div>

    );
}