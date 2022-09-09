import { useSelector } from 'react-redux';
import filteredTodos from '../../../redux/selectors';
import styles from './todoList.module.css';
import TodoElem from './todoElem';

function TodoList() {
  const state = useSelector(state => state.todos);
  const todos = filteredTodos(state);

  return (
    <ul className={styles.todoList}>
      {
        todos.map(todo => (
          <TodoElem
            id={todo.id}
            value={todo.value}
            status={todo.complited}
            key={todo.id}
          />
        ))
      }
    </ul>
  );
};

export default TodoList