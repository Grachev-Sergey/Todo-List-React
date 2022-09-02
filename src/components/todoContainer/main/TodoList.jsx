import styles from './TodoList.module.css'
import TodoElem from './todoElem/TodoElem';

function TodoList () {
  return (
    <ul className={styles.todoList}>
      <TodoElem />
    </ul>
  );
};

export default TodoList