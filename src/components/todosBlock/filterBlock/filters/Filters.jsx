import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../../../redux/taskSlice';
import styles from './filters.module.css';

function Filters () {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const allTodo = () => {
    setStatus('all');
    dispatch(
      changeFilter('all')
    );
  };

  const activeTodo = () => {
    setStatus('active');
    dispatch(
      changeFilter('active')
    );
  };

  const complitedTodo = () => {
    setStatus('completed');
    dispatch(
      changeFilter('completed')
    );
  };

  return (
    <div className={styles.filtres}>
      <button 
        className={status === 'all' ? styles.buttonSelected : styles.button} 
        onClick={allTodo}
      >
        All
      </button>
      <button 
        className={status === 'active' ? styles.buttonSelected : styles.button}
        onClick={activeTodo}
      >
        Active
      </button>
      <button 
        className={status === 'completed' ? styles.buttonSelected : styles.button}
        onClick={complitedTodo}
      >
        Complited
      </button>
    </div>
  );
};

export default Filters