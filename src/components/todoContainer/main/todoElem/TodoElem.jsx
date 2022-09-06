import styles from './TodoElem.module.css';
import checkMark from './CheckMark.png';

function TodoElem({
  todo,
  removeTodo,
  switchTodoCompleted,
  swtchFocusInput,
  blurInput,
}) {

  const saveChanges = (event) => {
    if (event.key === 'Enter') {
      swtchFocusInput(todo.id);
    }
  };

  return (
    <li>
      <button
        className={styles.toggle}
        onClick={() => switchTodoCompleted(todo.id)}
      >
        <img
          src={checkMark}
          alt='CheckMark'
          className={todo.isComplited ? styles.img : styles.hide}
        />
      </button>
      <input
        className={todo.isComplited ? styles.taskComplited : styles.task}
        defaultValue={todo.text}
        readOnly={!todo.focused}
        onBlur={() => blurInput(todo.id)}
        onDoubleClick={() => swtchFocusInput(todo.id)}
        onKeyDown={saveChanges}
      />
      <button
        className={styles.delete}
        onClick={() => removeTodo(todo.id)}
      >
      x
      </button>
    </li>
  );
};

export default TodoElem