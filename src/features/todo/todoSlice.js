import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
  todos: [{ id: 1, text: "Hello world" }],
};


export const todoSlice = createSlice({
    name:"todos",
    intialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            //state ko update bhi karna hein
            state.push(todo);
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})

//saray reducers ko export bhi karna hein
export const {addTodo,removeTodo}  = todoSlice.actions

//store ko bhi reducers ki awarness honi chaiyay so reducers ki list chaiyay hoti hein taky sirf unsey hi values ko update krsaky
export default todoSlice.reducer