import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { leaveActiveTasks } from '../../../redux/taskSlice';
import styles from './filtersAndCounter.module.css';
import Filters from './filters';

function FiltersAndCounter () {
  const todos = useSelector(state => state.todos.tasks);
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
      <Filters/>
      <button
        className={styles.button}
        onClick={clearComplited}
      >
        Clear complited
      </button>
    </div>
  );
};

export default FiltersAndCounter