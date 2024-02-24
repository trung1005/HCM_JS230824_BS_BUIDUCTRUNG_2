import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState:{
        data: null
    },
    reducers:{
        setData: (state, action)=>{
            state.data = action.payload
        },
        addTodo: (state, action)=>{
            state.data.push(action.payload)
        },
        deleteTodo: (state, action)=>{
            console.log(action.payload);
            state.data = state.data.filter(item=>item.id !== action.payload)
        }
    }
})

export const todoReducer = todoSlice.reducer;
export const todoAction = todoSlice.actions