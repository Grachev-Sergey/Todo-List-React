import styles from './Filters.module.css';


function Filters ({
  filter,
  allTodo, 
  activeTodo, 
  complitedTodo,
}) {
  return (
    <div className={styles.filtres}>
      <button 
        className={filter === 'all' ? styles.buttonSelected : styles.button} 
        onClick={allTodo}
      >
        All
      </button>
      <button 
        className={filter === 'active' ? styles.buttonSelected : styles.button}
        onClick={activeTodo}
      >
        Active
      </button>
      <button 
        className={filter === 'completed' ? styles.buttonSelected : styles.button}
        onClick={complitedTodo}
      >
        Complited
      </button>
    </div>
  );
};

export default Filters