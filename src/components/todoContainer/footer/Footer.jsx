import { useDispatch } from 'react-redux';
import { leaveActiveTasks } from '../../../redux/TaskSlice';
import styles from './Footer.module.css';
import Filters from './filters/Filters';


function Footer ({
  todos, 
  filter, 
  activeTodo, 
  allTodo, 
  complitedTodo, 
}) {

  const dispatch = useDispatch();

  const clearComplited = () => dispatch(leaveActiveTasks());

  let numActiveTodos = todos.filter(todo => !todo.complited);

  return (
    <div className={styles.footer}>
      <span className={styles.counter}>
        {numActiveTodos.length}
        {numActiveTodos.length === 1 ? ' item ' : ' items '}
        left
      </span>
      <Filters filter={filter}
       activeTodo={activeTodo}
       allTodo={allTodo}
       complitedTodo={complitedTodo}
      />
      <button
        className={styles.button}
        onClick={clearComplited}
      >
        Clear complited
      </button>
    </div>
  );
};

export default Footer