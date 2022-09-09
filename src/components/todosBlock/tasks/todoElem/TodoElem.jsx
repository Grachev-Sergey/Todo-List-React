import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, switchStatus, changeText } from '../../../../redux/taskSlice';
import styles from './todoElem.module.css';
import checkMark from '../../../../imgs/checkMark.png';

function TodoElem({
  id,
  value,
  status,
}) {
  const [focus, setFocus] = useState(false);
  const [newText, setNewText] = useState(value);
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(
      deleteTask(id)
    );
  };

  const switchTodoCompleted = () => {
    dispatch(
      switchStatus(id)
    );
  };

  const changeValue = (elem) => {
    setNewText(elem.target.value);
  };

  const saveChanges = (event) => {
    if (event.key === 'Enter') {
      setFocus(false);
      dispatch(
        changeText({
          id: id,
          value: newText
        })
      );
    }
  };

  const blure = (elem) => {
    setNewText(elem.target.value);
    setFocus(false);
    dispatch(
      changeText({
        id: id,
        value: newText,
      })
    );
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
          className={status ? styles.img : styles.hide}
        />
      </button>
      {!focus ?
      <div 
        className={status ? styles.taskComplited : styles.task}
        onDoubleClick={() => {setFocus(true)}}
      >
      {value}
      </div>
      : <input
        className={status ? styles.taskComplited : styles.task}
        defaultValue={value}
        onChange={changeValue}
        onBlur={blure}
        onKeyDown={saveChanges}
      />}
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