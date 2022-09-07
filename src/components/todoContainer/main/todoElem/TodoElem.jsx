import { useDispatch } from 'react-redux';
import { deleteTask, switchStatus, switchFocus, blur } from '../../../../redux/TaskSlice';

import styles from './TodoElem.module.css';
import checkMark from './CheckMark.png';

function TodoElem({
  id,
  value,
  status,
  focused,
}) {

  const saveChanges = (event) => {
    if (event.key === 'Enter') {
      swtchFocusInput();
    }
  };

  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(
      deleteTask({
        id: id
      })
    )
  };

  const switchTodoCompleted = () => {
    dispatch(
      switchStatus({
        id: id
      })
    )
  };

  const swtchFocusInput = () => {
    dispatch(
      switchFocus({
        id: id
      })
    )
  };

  const blurInput = () => {
    dispatch(
      blur({
        id: id
      })
    )
  };

  return (
    <li>
      <button
        className={styles.toggle}
        onClick={switchTodoCompleted}
      >
        <img
          src={checkMark}
          alt='CheckMark'
          className={!status ? styles.img : styles.hide}
        />
      </button>
      <input
        className={status ? styles.taskComplited : styles.task}
        defaultValue={value}
        readOnly={!focused}
        onBlur={blurInput}
        onDoubleClick={swtchFocusInput}
        onKeyDown={saveChanges}
      />
      <button
        className={styles.delete}
        onClick={removeTodo}
      >
      x
      </button>
    </li>
  );
};

export default TodoElem