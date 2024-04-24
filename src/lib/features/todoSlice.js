
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from './../../axios/axios'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    try {
      const response = await api.get('/todoList/');
      console.log("REPONSE : " + response)
      return response.data;
    }
    catch (err) {
      return err.response.data
    }
  }
)

const initialState = {
  data: null,
  loading: false,
  error: null
}

export const todoSlice = createSlice({
  name: 'slicetodo',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
  //action creators 

  // addTodo: (state, action) => {
  //   const { id, todo } = action.payload
  //   state.push({ id, todo })
  // },

  // deleteTodo: (state, action) => {

  //   console.log("FROM DELETE ACTION: " + action.payload)
  //   const id = action.payload;
  //   return state.filter((data) => data.id !== id)
  // },
  // },
})

// export const { addTodo, deleteTodo } = todoSlice.actions

// export default todoSlice.reducer

export default todoSlice.reducer