import styles from './TodoList.module.css'
import TodoElem from './todoElem/TodoElem';

function TodoList({ todos, removeTodo, switchTodoCompleted }) {
  return (
    <ul className={styles.todoList}>
      {
        todos.map(todo => (
          <TodoElem
            key={todo.id}
            removeTodo={removeTodo}
            switchTodoCompleted={switchTodoCompleted}
            todo={todo}
          />
        ))
      }
    </ul>
  );
};

export default TodoList