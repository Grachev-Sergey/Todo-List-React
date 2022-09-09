import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    filter: 'all',
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date().toISOString(),
        value: action.payload.todoText,
      }
      state.tasks = [newTask, ...state.tasks]
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(todo => todo.id !== action.payload);
    },
    switchStatus: (state, action) => {
      state.tasks = state.tasks.map(todo => {
        if (todo.id !== action.payload) return todo;
        return {
          ...todo,
          complited: !todo.complited,
        };
      });
    },
    changingArrow: (state) => {
      const isEverySelected = state.tasks.every((elem) => elem.complited);
      state.tasks = state.tasks.map(
        todo => {
          return {
            ...todo,
            complited: !isEverySelected,
          };
        }
      );
    },
    leaveActiveTasks: (state) => {
      state.tasks = state.tasks.filter(todo => !todo.complited)
    },
    changeText: (state, action) => {
      state.tasks = state.tasks.map(todo => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          value: action.payload.value,
        };
      });
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  }
})

export const {
  addTask,
  deleteTask,
  switchStatus,
  changingArrow,
  leaveActiveTasks,
  changeText,
  changeFilter,
} = tasksSlice.actions

export default tasksSlice.reducer