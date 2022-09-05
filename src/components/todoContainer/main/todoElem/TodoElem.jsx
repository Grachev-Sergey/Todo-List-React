import styles from './TodoElem.module.css';
import checkMark from './CheckMark.png';

function TodoElem ({todo, removeTodo, switchTodoCompleted}) {

  // const renderInput = (text) => {
  //   return (
  //     <form>
  //       <input type="text" value={text} className={styles.input}/>
        
  //     </form>
  //   )
  // }
  return (
    <li>
      <button className={styles.toggle} 
      onClick={() => switchTodoCompleted(todo.id)} >
        <img src={checkMark} 
        alt='CheckMark' 
        className={todo.isComplited ? styles.img : styles.hide} />
      </button>
      <span className={todo.isComplited ? styles.labelComplited : styles.label} >{todo.text}</span>
      <button className={styles.delete} onClick={()=>removeTodo(todo.id)}>x</button>
    </li>
  );
};

export default TodoElem