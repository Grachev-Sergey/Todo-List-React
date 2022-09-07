import styles from './TodoList.module.css';
import TodoElem from './todoElem/TodoElem';

function TodoList({todos}) {

  return (
    <ul className={styles.todoList}>
      {
        todos.map(todo => (
          <TodoElem
            id={todo.id}
            value={todo.value}
            status={todo.complited}
            key={todo.id}
            focused={todo.focused}
          />
        ))
      }
    </ul>
  );
};

export default TodoList