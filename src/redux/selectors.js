import { createSelector } from "@reduxjs/toolkit";

const todos = (state) => state.tasks;
const status = (state) => state.filter;

const filteredTodos = createSelector(
  [todos, status],
  (todos, filter) => {
    if (filter === 'all') return todos;
    return todos.filter(i => {
      if (filter === 'completed') {
        return i.complited;
      }
      return !i.complited;
    });
  }
)
export default filteredTodos