import { createSlice } from "@reduxjs/toolkit";


export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask ={
        id: new Date().toISOString(),
        value: action.payload.tasks,
        complited: false,
        focused: false,
      }
      state.unshift(newTask)
    },
    deleteTask: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    switchStatus: (state, action) => {
      return state.map(todo => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          complited: !todo.complited,
        }
      })
    },
    changingArrow: (state) => {
      const isEverySelected = state.every((elem) => elem.complited);
      return state.map(
        todo => {
          return {
            ...todo,
            complited: !isEverySelected
          }
        }
      )
    },

    // эти 2 ф-ии убрать
    switchFocus: (state, action) => {
      return state.map(
        todo => {
          if (todo.id !== action.payload.id) return todo;
          return {
            ...todo,
            focused: !todo.focused,
          }
        }
      )
    },
    blur: (state, action) => {
      return state.map(
        todo => {
          if (todo.id !== action.payload.id) return todo;
          return {
            ...todo,
            focused: false
          }
        }
      )
    },
    leaveActiveTasks: (state) => {
      return state.filter(todo => !todo.complited)
    },
  }
})

export const {
        addTask,
        deleteTask,
        switchStatus,
        changingArrow,
        switchFocus,
        blur,
        leaveActiveTasks
      } = tasksSlice.actions



export default tasksSlice.reducer