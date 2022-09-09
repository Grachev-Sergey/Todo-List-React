import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './taskSlice'

export default configureStore({
  reducer: {
    todos: tasksReducer,
  }
})