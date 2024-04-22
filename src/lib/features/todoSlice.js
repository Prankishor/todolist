
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, todo: "A dummy todo item" }
]

export const todoSlice = createSlice({
  name: 'slicetodo',
  initialState,
  reducers: {

    //action creators 

    addTodo: (state, action) => {
      const { id, todo } = action.payload
      state.push({ id, todo })
    },

    deleteTodo: (state, action) => {

      console.log("FROM DELETE ACTION: " + action.payload)
      const id = action.payload;
      return state.filter((data) => data.id !== id)
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer