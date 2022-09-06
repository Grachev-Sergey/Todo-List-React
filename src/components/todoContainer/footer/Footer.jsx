import styles from './Footer.module.css';
import Filters from './filters/Filters';


function Footer ({todos, activeTodo, allTodo, complitedTodo, clearComplited}) {
  let numActiveTodos = todos.filter(todo => todo.isComplited === false)

  return (
    <div className={styles.footer}>
      <span className={styles.counter}>
      {numActiveTodos.length}
      {numActiveTodos.length === 1 ? ' item' : ' items'} left</span>
      <Filters activeTodo={activeTodo} allTodo={allTodo} complitedTodo={complitedTodo}/>
      <button className={styles.button} onClick={() => clearComplited()}>Clear complited</button>
    </div>
  );
};

export default Footer