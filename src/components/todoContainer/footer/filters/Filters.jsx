import styles from './Filters.module.css';


function Filters ({allTodo, activeTodo, complitedTodo}) {
  return (
    <div className={styles.filtres}>
      <button className={styles.button} onClick={()=>allTodo()}>All</button>
      <button className={styles.button} onClick={()=>activeTodo()}>Active</button>
      <button className={styles.button} onClick={()=>complitedTodo()}>Complited</button>
    </div>
  );
};

export default Filters